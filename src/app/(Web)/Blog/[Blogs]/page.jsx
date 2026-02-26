import React from 'react';

export async function generateMetadata({ params }) {
    const {Blogs} = await params
    return {
        title: `Blog ${Blogs}`,
    };
}
const Blogs = ({ params }) => {
    console.log(params);
    return (
        <div>
            Blogs
        </div>
    );
};

export default Blogs;