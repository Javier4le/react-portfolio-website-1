import React from "react";
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
	{
		avatar: AVTR1,
		name: 'Kwame Despite',
		review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae alias quod amet aspernatur accusamus voluptate asperiores aperiam molestias dolorum repudiandae quo sunt dignissimos ex, error fugiat nam voluptatem in magni!',
	},
	{
		avatar: AVTR2,
		name: 'Tina Snow',
		review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae alias quod amet aspernatur accusamus voluptate asperiores aperiam molestias dolorum repudiandae quo sunt dignissimos ex, error fugiat nam voluptatem in magni!',
	},
	{
		avatar: AVTR3,
		name: 'Shatta Wale',
		review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae alias quod amet aspernatur accusamus voluptate asperiores aperiam molestias dolorum repudiandae quo sunt dignissimos ex, error fugiat nam voluptatem in magni!',
	},
	{
		avatar: AVTR4,
		name: 'Nana Ama McBrown',
		review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae alias quod amet aspernatur accusamus voluptate asperiores aperiam molestias dolorum repudiandae quo sunt dignissimos ex, error fugiat nam voluptatem in magni!',
	},
]


const Testimonials = () => {
	return (
		<section id='testimonials'>
			<h5>Review from clients</h5>
			<h2>Testimonials</h2>

			<Swiper className="container testimonials__container"
				spaceBetween={40}
				slidesPerView={1}
				centeredSlides={true}
				autoplay={{delay: 2500, disableOnInteraction: false,}}
				pagination={{clickable: true,}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
			>
				{
					data.map(({ avatar, name, review }, index) => {
						return (
							<SwiperSlide key={index} className="testimonial">
								<div className="client__avatar">
									<img src={avatar} />
								</div>
								<h5>{name}</h5>
								<small className="client__review">{review}</small>
							</SwiperSlide>
						)
					})
				}
			</Swiper>
		</section>
	)
}

export default Testimonials