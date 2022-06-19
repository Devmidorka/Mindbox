import React from 'react';

const InfoPanel = ({countOfItems, sort, changeActive, clearCompleted}) => {
    return (
        <div className='infoPanel'>
            <span className='itemsLeft'>{countOfItems} items left</span>
            <div className="sortButtons">
                {sort.buttons.map((button, index) =>
                    <div
                        className={`${sort.active === index ? 'active' : ''}`}
                        onClick={() => changeActive(index)}
                        key={index}
                        data-testid={`button-${button.condition}`}

                    >{button.title}</div>
                )}

            </div>
            <div className="clearButton">
                <span
                    onClick={clearCompleted}
                    data-testid={'clear-completed-button'}
                >Clear completed</span>
            </div>
        </div>
    );
};

export default InfoPanel;