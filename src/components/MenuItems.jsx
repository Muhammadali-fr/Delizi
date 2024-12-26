import React, { useState } from 'react';
import './MenuItems.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Spaghetti from '../assets/Spaghetti.png';
import Gnocchi from '../assets/Gnocchi.png';
import Rovioli from '../assets/Rovioli.png';
import PenneAllaVodak from '../assets/PenneAllaVodak.png';
import Risoto from '../assets/Risoto.png';
import SplitzaSignature from '../assets/SplitzaSignature.png';

function MenuItems({ itemsPerPage = 6, addItemToCart, NotifySucces }) {
  const data = [
    { id: 1, name: 'Spaghetti', price: 12.05, message: 'Delicious spaghetti with tomato sauce.', image: Spaghetti },
    { id: 2, name: 'Gnocchi', price: 12.05, message: 'Tender gnocchi with butter sauce.', image: Gnocchi },
    { id: 3, name: 'Rovioli', price: 12.05, message: 'Homemade ravioli with ricotta.', image: Rovioli },
    { id: 4, name: 'Penne Alla Vodka', price: 12.05, message: 'Penne pasta with vodka sauce.', image: PenneAllaVodak },
    { id: 5, name: 'Risotto', price: 12.05, message: 'Creamy mushroom risotto.', image: Risoto },
    { id: 6, name: 'Splitza Signature', price: 12.05, message: 'Special pizza with unique toppings.', image: SplitzaSignature },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="menu-container">
      <div className="menu-list">
        {currentData.map((item) => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} loading="lazy" />
            <h3>{item.name}</h3>
            <p className='menu-item-message'>{item.message}</p>
            <div className="menu-item-price-btn">
              <p>${item.price}</p>
              <button onClick={() => {
                addItemToCart(item);
                NotifySucces();
                }}>
                  Order now
                </button>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrevious} disabled={currentPage === 1}>
          <FaAngleLeft />
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
}

export default MenuItems;
