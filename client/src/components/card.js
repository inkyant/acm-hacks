
import Popup from 'reactjs-popup'
import './card.css';
import { useDrag } from 'react-dnd';

export default function Card({ cardData, preqCleared, removeCard }) {

    // set up dragging functionality
    // isDragging is a bool if the component is being dragged
    // drag is a ref that we give to the object so that the library knows which object we want to be draggable
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "class", // each draggable needs a "type", but we only have one type of draggable
        // we want the place we drag to get these things:
        item: {
            data: cardData,
            remove: () => removeCard(),
        },
        collect: (monitor) => ({
            // we want to have "isDragging", so we get it from monitor
            isDragging: !!monitor.isDragging(),
        }),
    }))

    return (
        
        <div className="card" ref={drag} style={{ border: isDragging ? '2px solid yellow' : undefined }}>
            <div style={{ opacity: preqCleared ? 0 : 1, position: 'absolute', borderRadius: '50%', width: '10px', height: '10px', backgroundColor: 'red', right: '5%', top: '7%' }} />
            <div className="title">{cardData.category + ' ' + cardData.course_num}</div>
            <div>{cardData.title}</div>
            <div>{cardData.credits + ' credits'}</div>
            <Popup trigger={<button className='popup-button'>info</button>} modal>
                {(close) => (
                    <div className="popup-container" onClick={close}>
                        <div className='popup' onClick={(e) => e.stopPropagation()}>
                            <div className='bold' style={{ fontSize: 24 }}>{cardData.category + ' ' + cardData.course_num + ': ' + cardData.title}</div>
                            <div>{'Credits: ' + cardData.credits}</div>
                            <div>{'Prerequistes: ' + cardData.prereqs}</div>
                            <br/>
                            <div>{cardData.description}</div>
                            <br/>
                            <div className='exit-text'>Click anywhere to close</div>
                        </div>
                    </div>
                )}
            </Popup>
        </div>
        
    );
}