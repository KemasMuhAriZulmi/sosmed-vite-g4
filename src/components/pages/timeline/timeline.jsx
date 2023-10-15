import { AiOutlineHeart } from "react-icons/ai"
import LayoutPage from "../../layout/layout"
import "./timeline.css"
import { BiRepost } from "react-icons/bi"
import { FaRegComment } from "react-icons/fa"
import { GoComment } from "react-icons/go"
import { BsImage } from "react-icons/bs"
import { RiEmotionHappyLine } from "react-icons/ri"
import React, { useState } from "react"
import axios from "axios"


const TimelinePage = () => {

    const [inPost, setInPost] = React.useState("");
    console.log(inPost);

    const onPost = () => {
        axios.post("http://localhost:2024/post", {
            post: inPost,
            img: "dummyIMG",
            account_id: "dummyUID",
            date: "dummyDATE",
        })
        .then((response) => {
            console.log("response post data", response);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    


    const printAllPost = () => {
        return <div>
            testtesttesttesttest()
        </div>
    }



    return <LayoutPage>
        <div id="timeline-main">
            <div id="timeline-text"> HOME </div>


            <div id="timeline-create-post-main">
                <div id="create-post">
                    <div id="create-pict">
                        <img id="profile-picture" style={{margin:"0px auto"}} src="https://i1.sndcdn.com/artworks-jfuMkpoGWdv2k7om-qZtwgA-t500x500.jpg"/> 
                    </div>
                    <div id="input-space">
                        <textarea name="" id="input-input" placeholder="What Happened Today" cols="30" rows="10" onChange={(e) => {setInPost(e.target.value)}}></textarea>
                        <div id="input-button">
                            <div id="input-button-2">
                                <li id="input-button-image" style={{display:"flex", gap:"5px"}}>
                                    <li style={{margin:"6px 0px"}}> <BsImage size={20}/> </li>
                                </li>
                                <li id="input-button-image" style={{display:"flex", gap:"5px"}}>
                                    <li style={{margin:"6px 0px"}}> <RiEmotionHappyLine size={20}/> </li>
                                </li>
                            </div>
                            <li> <button id="input-button-post" type="buttton" onClick={() => onPost()}> Post </button> </li>

                        </div>
                    </div>

                </div>
            </div>



            <div id="timeline-content">


                <div id="timeline-post-main">
                    <div id="post-pict">
                        <img id="profile-picture" style={{margin:"0px auto"}} src="https://i1.sndcdn.com/artworks-jfuMkpoGWdv2k7om-qZtwgA-t500x500.jpg"/> 
                    </div>
                    <div id="post-post">
                        <div id="post-name-date">
                            <div> <b> @Yui </b> </div>
                            <li id="post-date"> (- date)</li>
                        </div>
                        <div style={{display:"flex", flexDirection:"column", gap:"15px"}}>
                            <div>
                                (DUMMY) Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit repellat delectus reprehenderit natus incidunt libero, illum, repudiandae laudantium illo id dolor non rem hic dolorem sunt ut, sequi aperiam facilis.
                            </div>
                            <div>
                                <img width={"95%"} style={{borderRadius:"20px", margin:"auto"}} src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/3/21/1395401774125/Lorem-ipsum-011.jpg?width=465&dpr=1&s=none"/>
                            </div>
                            
                            <div id="post-button">
                                <ul id="post-button-like" style={{display:"flex", gap:"5px"}}>
                                    <li style={{margin:"6px 0px"}}> <AiOutlineHeart/> </li>
                                    like
                                </ul>
                                <ul id="post-button-comment" style={{display:"flex", gap:"5px"}}>
                                    <li style={{margin:"6px 0px"}}> <GoComment/> </li>
                                    comment
                                </ul>
                                <ul id="post-button-share" style={{display:"flex", gap:"5px"}}>
                                    <li style={{margin:"6px 0px"}}> <BiRepost/> </li>
                                    <li> share/repost </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>



                <div id="timeline-post-main">
                    <div id="post-pict">
                        <img id="profile-picture" style={{margin:"0px auto"}} src="https://i1.sndcdn.com/artworks-jfuMkpoGWdv2k7om-qZtwgA-t500x500.jpg"/> 
                    </div>
                    <div id="post-post">
                        <div id="post-name-date">
                            <div> <b> @Yui </b> </div>
                            <li id="post-date"> (- date)</li>
                        </div>
                        <div style={{display:"flex", flexDirection:"column", gap:"15px"}}>
                            <div>
                                (DUMMY) Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit repellat delectus reprehenderit natus incidunt libero, illum, repudiandae laudantium illo id dolor non rem hic dolorem sunt ut, sequi aperiam facilis.
                            </div>
                            <div>
                                <img width={"95%"} style={{borderRadius:"20px", margin:"auto"}} src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/3/21/1395401774125/Lorem-ipsum-011.jpg?width=465&dpr=1&s=none"/>
                            </div>
                            
                            <div id="post-button">
                                <ul style={{display:"flex", gap:"5px"}}>
                                    <li style={{margin:"6px 0px"}}> <AiOutlineHeart/> </li>
                                    like
                                </ul>
                                <ul style={{display:"flex", gap:"5px"}}>
                                    <li style={{margin:"6px 0px"}}> <FaRegComment/> </li>
                                    comment
                                </ul>
                                <ul style={{display:"flex", gap:"5px"}}>
                                    <li style={{margin:"6px 0px"}}> <BiRepost/> </li>
                                    <li> share/repost </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>


                {printAllPost()}

                
            </div>
        </div>
    </LayoutPage>
}

export default TimelinePage;