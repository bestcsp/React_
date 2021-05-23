import React from 'react'

export const Footer = () => {
    let FooterStyle={
            position: "relative",
            top: "70vh",
            width: "100%"
            
    }
    return (
        <>
        <div className="bg-dark text-light py-3 my-3">
            <p className="text-center" style={FooterStyle}></p>
            Copyright &copy; TodoList.com
        </div>
        </>
    )
}
