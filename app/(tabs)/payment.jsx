import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';



const Payment = () => {
  const [Order, setOrder] = useState('');
  const [Taxes, setTaxes] = useState('');
  const [DeliveryFees, setDeliveryFees] = useState('');

  
  const orderPrice = 8989;
  const taxPrice = 0;
  const deliveryFeePrice = 125;
  
  const estimatedDeliveryDays = 7;

  const totalPrice = orderPrice + taxPrice + deliveryFeePrice;

  const handlePayment = () => {
    console.log({
      Order,
      Taxes,
      DeliveryFees,
      Total: totalPrice,
      EstimatedDeliveryDays: estimatedDeliveryDays,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Summary</Text>

      <View style={styles.row}>
        <TextInput
          style={styles.subtitle1}
          placeholder="Order"
          keyboardType="numeric"
          value={Order}
          onChangeText={setOrder}
        />
        <Text style={styles.price}>₱{orderPrice}</Text>
      </View>

      <View style={styles.row}>
        <TextInput
          style={styles.subtitle2}
          placeholder="Taxes"
          value={Taxes}
          onChangeText={setTaxes}
        />
        <Text style={styles.price}>₱{taxPrice}</Text>
      </View>

      <View style={styles.row}>
        <TextInput
          style={styles.subtitle3}
          placeholder="Delivery Fees"
          value={DeliveryFees}
          onChangeText={setDeliveryFees}
        />
        <Text style={styles.price}>₱{deliveryFeePrice}</Text>
      </View>

      {/* Underline for the last input */}
      <View style={styles.underline} />

      {/* Total section */}
      <View style={styles.totalRow}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalPrice}>${totalPrice}</Text>
      </View>

      {/* Estimated Delivery Days section */}
      <View style={styles.estimatedRow}>
        <Text style={styles.estimatedLabel}>Estimated Delivery Days:</Text>
        <Text style={styles.estimatedDays}>{estimatedDeliveryDays} days</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#90CAF9',
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    fontFamily: 'Georgia',
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  subtitle1: {
    fontSize: 16,
    fontWeight: '400',
    color: '#111',
    flex: 1,
  },
  subtitle2: {
    fontSize: 16,
    fontWeight: '400',
    color: '#111',
    flex: 1,
  },
  subtitle3: {
    fontSize: 16,
    fontWeight: '400',
    color: '#111',
    flex: 1,
    marginBottom: 35,
  },
  price: {
    fontSize: 16,
    fontWeight: 'semi-bold',
    marginLeft: 8,
  },
  underline: {
    height: 1,
    backgroundColor: '#000',
    marginBottom: 30,
  },
  totalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingTop: 10,
    marginBottom: 30,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: '500',
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: '500',
  },
  estimatedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingTop: 10,
    marginBottom: 35,
   
  },
  estimatedLabel: {
    fontSize: 16,
    fontWeight: '500',
  },
  estimatedDays: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default Payment;
