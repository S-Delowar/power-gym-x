import React from 'react';
import Blog from './Blog';
import Footer from '../Footer/Footer';

const BlogPage = () => {
    return (
        <div>
            <div className="top-background-img">
                <div className="container classes">
                    <h1>BLOGS</h1>
                </div>
            </div>
            <Blog></Blog>
            <Footer></Footer>
        </div>
    );
};

export default BlogPage;