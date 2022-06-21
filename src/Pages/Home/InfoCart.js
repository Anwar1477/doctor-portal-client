import React from 'react';

const InfoCart = ({img,cartTitle,infoText,bgColor}) => {
    return (
        <div class={`card lg:card-side bg-base-100 shadow-xl bg-accent ${bgColor}`}>
        <figure className='pl-5'>
            <img src={img} alt="Album"/>
            </figure>
        <div class="card-body text-white">
          <h2 class="card-title">{cartTitle}</h2>
          <p>{infoText}</p>
          {/* <div class="card-actions justify-end">
            <button class="btn btn-primary">Listen</button>
          </div> */}
        </div>
      </div>
    );
};

export default InfoCart;