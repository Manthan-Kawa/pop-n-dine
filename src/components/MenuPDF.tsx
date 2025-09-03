import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { MenuItem } from '../types';

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  category: {
    fontSize: 18,
    marginTop: 15,
    marginBottom: 10,
    color: '#333',
    textTransform: 'capitalize',
  },
  item: {
    marginBottom: 10,
  },
  itemName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 12,
    marginTop: 2,
    color: '#666',
  },
  itemPrice: {
    fontSize: 12,
    marginTop: 2,
  },
  divider: {
    borderBottom: 1,
    borderColor: '#eee',
    marginVertical: 10,
  },
});

interface MenuPDFProps {
  items: MenuItem[];
}

const MenuPDF: React.FC<MenuPDFProps> = ({ items }) => {
  // Group items by category
  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, MenuItem[]>);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>Pop-N-Dine Menu</Text>
        
        {Object.entries(groupedItems).map(([category, categoryItems]) => (
          <View key={category}>
            <Text style={styles.category}>{category}</Text>
            {categoryItems.map((item) => (
              <View key={item.id} style={styles.item}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
                <Text style={styles.itemPrice}>₹{item.price.toFixed(2)}</Text>
                <View style={styles.divider} />
              </View>
            ))}
          </View>
        ))}
      </Page>
    </Document>
  );
};

export default MenuPDF;