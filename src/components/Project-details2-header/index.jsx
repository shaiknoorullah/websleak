/** @format */

import React from "react"
import Link from "next/link"

const ProjectDetails2Header = () => {
	return (
		<section
			className="page-header proj-det bg-img parallaxie valign"
			style={{
				backgroundImage:
					"url(/img/profeceintNow/proficientwide200.webp 200w, proficientwide674.webp 674w, proficientwide986.webp 986w, proficientwide1205.webp 1205w, proficientwide1400.webp 1400w)",
			}}
			data-overlay-dark="4"
		>
			<div className="container">
				<div className="row  ">
					<div className="col-lg-7 col-md-9">
						<div className="cont headerWrap ">
							<h6>Brand Design, UI/UX & Development</h6>
							<h2>ProficientNow</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-3">
						<div className="item mt-30">
							<h6>Client</h6>
							<p>
								<a href="#0">Envato.com</a>
							</p>
						</div>
					</div>
					<div className="col-lg-3">
						<div className="item mt-30">
							<h6>Date</h6>
							<p>3rd October 2022</p>
						</div>
					</div>
					<div className="col-lg-3">
						<div className="item mt-30">
							<h6>Categories</h6>
							<p>
								{/* <Link href="/works/works-dark">
									Web Design{" "}
								</Link>{" "} */}
								Design & development.
								{/* <Link href="/works/works-dark">
                    WordPress
                  </Link> */}
							</p>
						</div>
					</div>
					<div className="col-lg-3">
						<div className="item mt-30">
							<h6>Tags</h6>
							<p>
								{/* <Link href="/works/works-dark">
									Minimal
								</Link>{" "} */}
								Brand Design, UI/UX Design, Front-end
								development, & Back-end development.
								{/* <Link href="/works/works-dark">Modern</Link>{" "} */}
								{/* <Link href="/works/works-dark">Design</Link> */}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ProjectDetails2Header
