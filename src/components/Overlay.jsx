import React from 'react';

const Overlay = (props) =>{
    return(
        <>
        <div style={
            {"height":100+"%",
            "width":100+"%",
            "backgroundColor":"black",
            "position":"absolute",
            "z-index":"9999",
            "opacity":"0.7",
            "position":"fixed"
            }
        }>

        </div>
        <div style={
            {"height":100+"%",
            "width":100+"%",
            "position":"absolute",
            "z-index":"99999",
            "display":"flex",
            "alignItems":"center",
            "justifyContent":"center",
            "position":"fixed"
            }
        }>
                <div className='py-3 px-5 bg-light text-center rounded'>
                    <div className='h3'>Hang on</div>
                    <div class="spinner-grow tex-dark mt-4" role="status">
                        <span class="sr-only"></span>
                    </div>
                    <div className='h5 mt-4'>{props.message}</div>
                </div>

        </div>
        </>
    )
}

export default Overlay