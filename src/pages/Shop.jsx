import React, { useState, useEffect } from 'react';
import { merchItems } from '../data/mockMerch';
import MerchCard from '../components/MerchCard';
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa';

const SIZES = ['S', 'M', 'L', 'XL', 'XXL'];
const COUNTRIES = [
  "Morocco","Algeria","Angola","Botswana","Burkina Faso","Cameroon","DR Congo","Egypt",
  "Equatorial Guinea","Gabon","Ghana","Guinea","Ivory Coast","Mali","Mauritania",
  "Mozambique","Namibia","Nigeria","Senegal","South Africa","Tanzania","Tunisia",
  "Zambia","Zimbabwe"
];

const STORAGE_KEY = 'can2025_shop_cart_v1';

const loadSavedCart = () => {
  try {
    const savedData = localStorage.getItem(STORAGE_KEY);
    return savedData ? JSON.parse(savedData) : null;
  } catch (error) {
    console.error("Error loading cart:", error);
    return null;
  }
};

const Shop = () => {
  const savedCart = loadSavedCart();

  const [selectedItem, setSelectedItem] = useState(savedCart?.item || null);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [selectedSize, setSelectedSize] = useState(savedCart?.size || '');
  const [selectedCountry, setSelectedCountry] = useState(savedCart?.country || '');
  const [quantity, setQuantity] = useState(savedCart?.quantity || 1);

  const totalPrice = selectedItem ? selectedItem.price * quantity : 0;

  useEffect(() => {
    if (selectedItem && !orderSuccess) {
      const cartData = {
        item: selectedItem,
        size: selectedSize,
        country: selectedCountry,
        quantity: quantity
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cartData));
    } else if (!selectedItem && !orderSuccess) {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [selectedItem, selectedSize, selectedCountry, quantity, orderSuccess]);

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    setOrderSuccess(false);
    setSelectedSize('');
    setSelectedCountry('');
    setQuantity(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedItem.hasSize && !selectedSize) { alert("Please select a size."); return; }
    if (selectedItem.hasCountry && !selectedCountry) { alert("Please select a country."); return; }

    const orderDetails = {
      item: selectedItem.name,
      unitPrice: selectedItem.price,
      totalPrice: totalPrice,
      quantity: quantity,
      size: selectedItem.hasSize ? selectedSize : 'N/A',
      country: selectedItem.hasCountry ? selectedCountry : 'N/A'
    };

    console.log("Order submitted:", orderDetails);

    localStorage.removeItem(STORAGE_KEY);

    setOrderSuccess(true);
    setSelectedItem(null);
    setSelectedSize('');
    setSelectedCountry('');
    setQuantity(1);
  };

  return (
    <div className="min-h-screen bg-maroc-dark pt-24 pb-12 px-4 md:px-8">
      
      <div className="container mx-auto mb-12 text-center">
        <h1 className="text-4xl font-black text-white uppercase">
          Fan <span className="text-maroc-red">Shop</span>
        </h1>
        <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
          Gear up for AFCON 2025. Official flags, jerseys, and accessories.
        </p>
      </div>

      {orderSuccess && (
        <div className="container mx-auto max-w-2xl mb-12 bg-green-900/30 border-2 border-green-500 p-8 rounded-2xl text-center animate-fade-in">
          <FaCheckCircle className="text-5xl text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Order Pre-registered!</h3>
          <p className="text-gray-300">Your request has been received. We will contact you soon.</p>
        </div>
      )}

      {selectedItem && !orderSuccess && (
        <div className="container mx-auto max-w-3xl mb-16 animate-fade-in-up">
          
          <button 
            onClick={() => setSelectedItem(null)} 
            className="flex items-center text-gray-400 hover:text-white mb-6 transition-colors"
          >
            <FaArrowLeft className="mr-2"/> Back to products
          </button>

          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
            
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center justify-between">
              <span>
                Order: <span className="text-maroc-red ml-2">{selectedItem.name}</span>
              </span>
            </h2>

            <div className="flex items-start mb-8 bg-black/30 p-4 rounded-xl">
              <img src={selectedItem.image} alt={selectedItem.name} className="w-20 h-20 object-cover rounded-lg mr-4"/>
              <div>
                <p className="text-white font-bold">{selectedItem.name}</p>
                <p className="text-gray-400 text-sm">Unit Price: {selectedItem.price} DH</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

              {(selectedItem.hasSize || selectedItem.hasCountry) && (
                <div className="bg-black/20 p-4 rounded-xl border border-gray-800/50 mb-6">
                  <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Customization</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {selectedItem.hasSize && (
                      <div>
                        <label className="block text-gray-400 text-sm font-bold mb-2">Select Size</label>
                        <select 
                          required 
                          value={selectedSize}
                          onChange={(e) => setSelectedSize(e.target.value)}
                          className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white cursor-pointer"
                        >
                          <option value="" disabled>Choose a size...</option>
                          {SIZES.map(size => (
                            <option key={size} value={size} className="bg-gray-900">{size}</option>
                          ))}
                        </select>
                      </div>
                    )}

                    {selectedItem.hasCountry && (
                      <div>
                        <label className="block text-gray-400 text-sm font-bold mb-2">Select Country</label>
                        <select 
                          required 
                          value={selectedCountry}
                          onChange={(e) => setSelectedCountry(e.target.value)}
                          className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white cursor-pointer"
                        >
                          <option value="" disabled>Choose a country...</option>
                          {COUNTRIES.map(country => (
                            <option key={country} value={country} className="bg-gray-900">{country}</option>
                          ))}
                        </select>
                      </div>
                    )}

                  </div>
                </div>
              )}

              <div>
                <label className="block text-gray-400 text-sm font-bold mb-2">Quantity</label>
                <input 
                  type="number"
                  min="1"
                  required
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full md:w-1/3 bg-black/50 border border-gray-700 rounded-lg p-3 text-white font-bold text-lg"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 text-sm font-bold mb-2">Full Name</label>
                  <input type="text" required placeholder="Your Name" className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white"/>
                </div>
                <div>
                  <label className="block text-gray-400 text-sm font-bold mb-2">Phone Number</label>
                  <input type="tel" required placeholder="+212..." className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white"/>
                </div>
              </div>
              
              <div>
                <label className="block text-gray-400 text-sm font-bold mb-2">Delivery Address</label>
                <textarea required rows="3" placeholder="Full address..." className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white"></textarea>
              </div>

              <button type="submit" className="w-full bg-maroc-red hover:bg-red-700 text-white font-bold py-4 rounded-xl text-lg">
                Confirm Order ({totalPrice} DH)
              </button>
            </form>
          </div>

        </div>
      )}

      {!selectedItem && (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in">
          {merchItems.map((item) => (
            <MerchCard key={item.id} item={item} onSelect={handleSelectItem} />
          ))}
        </div>
      )}

    </div>
  );
};

export default Shop;
