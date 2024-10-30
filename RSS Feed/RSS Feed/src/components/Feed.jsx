/* eslint-disable react/prop-types */

const Feed = ({ title, link, date }) => {

    let format = { day: "numeric", month: "long", year: "numeric" }

    let articleDate = new Date(date).toLocaleDateString('en-GB', format)

    return (
        <>
            <a href={link} target="_blank" rel="noopener noreferrer" 
                className="hover:text-[#E61E25] ">
                <h3 className="text-xl mb-1 underline">{title}</h3>
                <p>{articleDate}</p>
            </a>
        </>
    )

}

export default Feed;