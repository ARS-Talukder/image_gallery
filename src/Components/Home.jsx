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
const Home = () => {
    const images = [{ _id: 1, image: image_1 }, { _id: 2, image: image_2 }, { _id: 3, image: image_3 }, { _id: 4, image: image_4 }, { _id: 5, image: image_5 }, { _id: 6, image: image_6 }, { _id: 7, image: image_7 }, { _id: 8, image: image_8 }, { _id: 9, image: image_9 }, { _id: 10, image: image_10 }, { _id: 11, image: image_11 }];
    // console.log(images);

    return (
        <div>
            <h2 className="text-left text-xl font-bold mx-2 my-4">Gallery</h2>
            <hr />
            <section className='grid grid-cols-5 gap-4 my-6'>

                {
                    images.map(i => <div key={i._id} className='flex justify-center items-center border-2 rounded-lg'>
                        <img src={i.image} alt={i._id} />
                    </div>)

                }
                {/* <div className='flex justify-center items-center border-2 rounded-lg row-span-2 col-span-2'>
                    <img src={image_1} alt="image" width={450} />
                </div>

                <div className='flex justify-center items-center border-2 rounded-lg'>
                    <img src={image_1} alt="image" width={150} />
                </div> */}

            </section>
        </div>
    );
};

export default Home;