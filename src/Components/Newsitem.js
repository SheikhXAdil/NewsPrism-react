import React from 'react'

const Newsitem= (props) => {
        let {title, description, imageUrl, newsUrl, author, date, source} = props
        return (
            <>
            <div className='my-3'>
                <div className="card mx-2"  style={{ backgroundColor: props.mode === 'dark' ? '#0e2e36' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                    <div style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        position: "absolute",
                        right: "0"
                    }}>
                    <span className="badge rounded-pill bg-info" style={{left:'40%', zIndex: '1'}}> {source} </span>
                    </div>
                    <img src={!imageUrl?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtkgkskYs1tjMC9YHyGnHuC4wK4FwKzQboLA&usqp=CAU":imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text" ><small className="text-muted">By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
                            <a href={newsUrl} target="_blank" rel="noreferrer" className={`btn btn-${props.mode === 'light' ? 'dark' : 'info'}`} >Read More</a>
                        </div>
                </div>
                </div>
            </>
        )
    }

export default Newsitem
