import { BiImage } from "react-icons/bi";
import './styles.css';
import image_1 from '../assets/image-1.webp';
import image_2 from '../assets/image-2.webp';
import image_3 from '../assets/image-3.webp';
import image_5 from '../assets/image-4.webp';
import image_4 from '../assets/image-5.webp';
import image_6 from '../assets/image-6.webp';
import image_7 from '../assets/image-7.webp';
import image_8 from '../assets/image-8.webp';
import image_9 from '../assets/image-9.webp';
import image_10 from '../assets/image-10.jpeg';
import image_11 from '../assets/image-11.jpeg';
import { useRef, useState } from "react";
const Home = () => {
    // const images = [
    //     { _id: 1, position: 1, image: image_1 },
    //     { _id: 2, position: 2, image: image_2 },
    //     { _id: 3, position: 3, image: image_3 },
    //     { _id: 4, position: 4, image: image_4 },
    //     { _id: 5, position: 5, image: image_5 },
    //     { _id: 6, position: 6, image: image_6 },
    //     { _id: 7, position: 7, image: image_7 },
    //     { _id: 8, position: 8, image: image_8 },
    //     { _id: 9, position: 9, image: image_9 },
    //     { _id: 10, position: 10, image: image_10 },
    //     { _id: 11, position: 11, image: image_11 }
    // ];
    const images = [image_1, image_2, image_3, image_4, image_5, image_6, image_7, image_8, image_9, image_10, image_11];
    const [imageArray, setImageArray] = useState(images);

    // Click Add Image to go to file
    const inputRef = useRef(null);
    const handleImageClick = () => {
        inputRef.current.click();
    }

    // Upload image
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const image = URL.createObjectURL(file);

        //update image array
        const newImageArray = [...imageArray, image];
        setImageArray(newImageArray)
    }

    //Drag and Drop 
    const [dragItemIndex, setDragItemIndex] = useState(null);
    const [dragOverItemIndex, setDragOverItemIndex] = useState(null)

    const handleSort = () => {
        //duplicate items
        const _images = [...imageArray];

        //remove and save dragged item
        const draggedItemContent = _images.splice(dragItemIndex, 1)[0];

        //switch the position
        _images.splice(dragOverItemIndex, 0, draggedItemContent);

        //reset the position
        setDragItemIndex(null);
        setDragOverItemIndex(null)

        //update the actual array
        setImageArray(_images);
    }

    return (
        <div>
            <h2 className="text-left text-xl font-bold mx-2 my-4">Gallery</h2>
            <hr />
            <section className='grid grid-cols-5 gap-4 my-6'>

                {
                    imageArray.map((image, index) =>
                        <div
                            key={index}
                            className={index == 0 ? 'flex justify-center items-center border-2 rounded-lg relative row-span-2 col-span-2 image_container' : 'flex justify-center items-center border-2 rounded-lg relative image_container'}
                            draggable
                            onDragStart={(e) => setDragItemIndex(index)}
                            onDragEnter={(e) => setDragOverItemIndex(index)}
                            onDragEnd={handleSort}
                        >
                            <input type="checkbox" className="checkbox absolute top-4 left-4" />
                            <img src={image} alt="image" />
                        </div>)
                }

                <button onClick={handleImageClick} onChange={handleImageUpload} className="flex justify-center items-center border-2 border-dashed rounded-lg">
                    <div>
                        <div className="flex justify-center">
                            <span className="text-2xl"><BiImage></BiImage></span>
                        </div>
                        <p>Add Images</p>
                        <input type="file" ref={inputRef} className="hidden" />
                    </div>
                </button>

            </section >
            
        </div >
    );
};

export default Home;