import React from 'react';
import { useNavigate } from 'react-router-dom';
import paytmQR from '../../assets/SonuDiPaytmQR.jpg'; // Replace with the correct path to your Paytm QR image
import phonePeQR from '../../assets/SonuDiPhonePeQR.jpg'; // Replace with the correct path to your PhonePe QR image

const QRPage = () => {
    const navigate = useNavigate();

    const handleDoneClick = () => {
        navigate('/myorders'); // Navigate to MyOrders page
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Payment Options</h1>

            <div style={styles.qrContainer}>
                <div style={styles.qrItem}>
                    <img src={paytmQR} alt="Paytm QR Code" style={styles.qrImage} />
                    <p>Scan to Pay with Paytm</p>
                </div>
            </div>

            <div style={styles.formLink}>
                <a href="https://forms.gle/wcxEHRM22BMCTjca9" target="_blank" rel="noopener noreferrer">
                    Fill out this Google Form after payment
                </a>
            </div>

            <button onClick={handleDoneClick} style={styles.doneButton}>Done</button>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
    },
    title: {
        fontSize: '2em',
        marginBottom: '20px',
    },
    qrContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', // Centers items vertically within the container
        gap: '20px',
        marginBottom: '20px',
        flexWrap: 'wrap',
    },
    qrItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Centers content horizontally
        textAlign: 'center',
        flex: '1 1 45%', // Make each QR item take up around half of the container
        margin: '10px',
    },
    qrImage: {
        width: '100%', // Fill available width
        maxWidth: '500px', // Restrict maximum width
        height: 'auto', // Maintain aspect ratio
    },
    formLink: {
        margin: '20px 0',
        fontSize: '1.2em',
    },
    doneButton: {
        padding: '10px 20px',
        fontSize: '1.2em',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};



export default QRPage;
