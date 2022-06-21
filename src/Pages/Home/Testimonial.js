import React from "react";
import qoute from "../../assets/icons/quote.svg";
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from "./Review";

const Testimonial = () => {

    const reviews =[
        {
            _id :1,
            name:"Willson Henrry",
            city:"North Mesodonia",
            review:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img:people1

        },
        {
            _id :2,
            name:"Steve Smith",
            city:"Calofornia",
            review:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img:people2

        },
        {
            _id :3,
            name:"David Warner",
            city:"Australia",
            review:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img:people3

        },
    ];
  return (
    <section className="py-28">
      <div className="flex justify-between">
        <div>
          <h3 className="text-primary text-xl font-bold">Testimonial</h3>
          <h2>What Our Patients Says</h2>
        </div>
        <div className="">
          <img src={qoute} alt="" className="w-24 lg:w-48" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {
        reviews.map(review =><Review 
        key={review._id} 
        review={review}
        ></Review>)
      }
      </div>
    </section>
  );
};

export default Testimonial;
