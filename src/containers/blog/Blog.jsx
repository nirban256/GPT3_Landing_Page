import React from 'react';
import { Article } from '../../components';
import Images from './import'
import './blog.css'

const Blog = () => {
    return (
        <div className="gpt3_blog section_padding" id="blog">
            <div className="gpt3_blog-heading">
                <h1 className="gradient_text">
                    A lot is happening, We are blogging about it
                </h1>
            </div>
            <div className="gpt3_blog-container">
                <div className="gpt3_blog-container_groupA">
                    <Article imgUrl={Images.blog01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                </div>
                <div className="gpt3_blog-container_groupB">
                    <Article imgUrl={Images.blog02} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                    <Article imgUrl={Images.blog03} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                    <Article imgUrl={Images.blog04} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                    <Article imgUrl={Images.blog05} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                </div>
            </div>
        </div>
    )
}

export default Blog
