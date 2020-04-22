import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="footer">
			<div className="upper-info">
				<figure>
					<div className="span-wraper">
						<span>
							<i class="fas fa-truck-moving"></i>
						</span>
					</div>
					<figcaption>
						<h3>سرتیتر نوشته</h3>
						<p>تکست زیرین اینجاست</p>
					</figcaption>
				</figure>

				<figure>
					<div className="span-wraper">
						<span>
							<i class="fas fa-redo-alt"></i>
						</span>
					</div>
					<figcaption>
						<h3>سرتیتر نوشته</h3>
						<p>تکست زیرین اینجاست</p>
					</figcaption>
				</figure>

				<figure>
					<div className="span-wraper">
						<span>
							<i class="fas fa-gift"></i>
						</span>
					</div>
					<figcaption>
						<h3>سرتیتر نوشته</h3>
						<p>تکست زیرین اینجاست</p>
					</figcaption>
				</figure>

				<figure>
					<div className="span-wraper">
						<span>
							<i class="fas fa-comments"></i>
						</span>
					</div>
					<figcaption>
						<h3>سرتیتر نوشته</h3>
						<p>تکست زیرین اینجاست</p>
					</figcaption>
				</figure>
			</div>
			<section className="footer-wraper">
				<div className="right-side">
					<h2>تیتر کوچک</h2>
					<h1>سر تیتر اصلی</h1>
					<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
					<input type="email" placeholder="ایمیل اینجاست" />
					<button>Subscribe Now</button>
				</div>
				<div className="left-side">slider goes here</div>
			</section>
			<div className="copyright">
				طراحی شده توسط <Link to="#">با من</Link>
			</div>
		</div>
	);
};

export default Footer;
