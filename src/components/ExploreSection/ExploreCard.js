import React from 'react';
import './ExploreCard.css';
import { IoStar } from 'react-icons/io5';

const ExploreCard = ({ resto }) => {
    const name = resto?.info?.name.slice(0, 28);
    const coverImg = resto?.info?.image?.url ?? ' ';
    const rating = resto?.info?.rating?.rating_text ?? ' ';
    const cuisines = resto?.info?.cuisine?.map((item) => item.name).slice(0, 3);
    const checkBulkOffers = resto?.checkBulkOffers;

    if (resto?.bottomContainers?.length > 0) {
        var maxSafty = resto?.bottomContainers[0]?.text;
        var maxSaftyImgUrl = resto?.bottomContainers[0]?.image?.url;
        // console.log(maxSaftyImgUrl)

    }
    let offer = '';

    // console.log(maxSafty)
    let offerClassName = checkBulkOffers == false ? " discount-tag-gold " : "discount-tag";
    // console.log(offerClassName)
    if (checkBulkOffers && resto?.bulkOffers && resto?.bulkOffers.length > 0) {
        const bulkOfferText = resto?.bulkOffers[0]?.text;
        offer = (
            <div className="bulk-offer">
                <p>{bulkOfferText || 'Default Value for Bulk Offer'}</p>
                {/* Render other bulk offer details here */}
            </div>
        );
    } else {
        const goldOffer = resto?.gold?.offerValue || '';


        offer = (
            <div className="gold-offer">
                {
                    goldOffer.length > 0 &&
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src="https://b.zmtcdn.com/data/o2_assets/577bf55ff265ae45e11cfe6911d176941687789024.png"
                            alt="Gold Icon"
                            style={{ height: '20px', width: '20px' }}
                            className="gold-icon" />
                        <p>{`FLAT ${goldOffer}`}</p>

                    </div>
                }



                {/* Render other gold offer details here */}
            </div>
        );


    }

    return (
        <div className='maxwidth'>

            <div className='card box-container'>


                <div className={offerClassName}>
                    <p >{offer}</p>
                </div>

                <div className="explore_card_img">
                    <img src={coverImg} alt="" />


                </div>
                <div className='card_info'>

                    <div className='info'>

                        <h5>{name}</h5>
                        <div className='rating_div'>
                            <h2 className='rating'>{rating} </h2>
                            <IoStar />
                        </div>

                    </div>

                    <div className='info '>
                        <div className='cuisines'>
                            {
                                cuisines.map((item, id) =>
                                    <React.Fragment key={id}>
                                        <p>{item}  {id !== cuisines.length - 1 && <span>, </span>}</p>
                                    </React.Fragment>

                                )
                            }
                        </div>

                        {/* <p>{cost}</p> */}
                    </div>
                    <div className='info time'>
                        <p className=''> 28 min</p>

                    </div>

                    <div className='bottomContainer'>

                        {maxSafty &&
                            <p className='line'></p>
                        }
                        {
                            maxSafty &&
                            <div>
                                <img src={maxSaftyImgUrl} />
                                <p>{maxSafty}</p>

                            </div>

                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ExploreCard;
