import React from "react";
import { Redirect } from "react-router-dom";
import secretImage from "./funny-secret.jpg"; // 👈 имя картинки и расширение

const SecretPage = ({ isLoggedIn }) => {
    if (isLoggedIn) {
        return (
            <div className="jumbotron text-center">
                <img
                    src={secretImage}
                    alt="My Secret Meme"
                    style={{
                        maxWidth: "100%",
                        borderRadius: "12px",
                        boxShadow: "0 0 20px rgba(0,0,0,0.2)",
                        marginTop: "20px"
                    }}
                />
                <p style={{ marginTop: "10px", fontStyle: "italic", color: "#555" }}>
                    Programmer secrets — do not share! 🤖
                </p>
            </div>
        );
    }

    return <Redirect to="/login" />;
};

export default SecretPage;
