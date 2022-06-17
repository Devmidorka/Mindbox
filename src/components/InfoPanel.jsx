import React from 'react';

const InfoPanel = ({countOfItems, sort, changeActive}) => {
    return (
        <div className='infoPanel'>
            <span className='itemsLeft'>{countOfItems} items left</span>
            <div className="sortButtons">
                {sort.buttons.map((button, index) =>
                    <div
                        className={`${sort.active === index ? 'active' : ''}`}
                        onClick={() => changeActive(index)}
                        key={index}

                    >{button.title}</div>
                )}

            </div>
            <div className="clearButton">

            </div>
        </div>
    );
};

export default InfoPanel;