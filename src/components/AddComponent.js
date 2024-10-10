import React, { useState } from 'react';
import '../styles/AddComponent.css';
const AddComponent = ({ addItem, items }) => {
    const [inputValue, setInputValue] = useState('');

   
    const predefinedItems = ['Radish', 'Beans', 'Beet', 'Garlic','Mango', 'Okras', 'Apples', 'Corn', 'Lettuce', 'Onion', 'Chard', 'Carrots' ];

    // Function to add items from the input field
    const handleAddItem = () => {
        if (inputValue.trim()) {
            addItem(inputValue);
            setInputValue(''); // Clear the input field after adding
        }
    };

    // Function to handle "Enter" key press
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault(); // Prevents adding a new line in textarea
            handleAddItem(); // Adds item to the list
        }
    };

    return (
        <div className="create-section">
            <h3 class="textcolor">List App</h3>

            <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Add item...  (Enter to submit)"
                rows="3"
            />
            <button onClick={handleAddItem}>Add</button>

            <div className="predefined-buttons">
                {predefinedItems.map((item, index) => (
                    <button key={index} className="item-button" onClick={() => addItem(item)}>
                        {item}
                    </button>
                ))}
            </div>

            <div className="item-list">
                <h4 class="textcolor">Items Added:</h4>
               
                {items.length === 0 ? (
                    <div>
                    <img 
                      src="https://i.ibb.co/h1drRz2/dog-8514297-640.png" 
                      style={{ width: '130px', height: 'auto' }} 
                       alt="No items added yet"/>
                    <p>No items added yet.</p>
                    </div>
                    
                ) : (
                    items.map((item, index) => (
                        <div key={index} className="item">
                            <span>{item}</span>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default AddComponent;
