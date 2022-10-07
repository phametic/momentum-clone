import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function Wallpaper() {

    const CLIENT_ID = "_RJfitOdMKTj4WSZsp4Kskz905cSJbDA1Uu1C5-hJKk"

    const [wallpaper, setWallpaper] = useState("");
    const [loading, setLoading] = useState(true);

    async function getWallpaper() {
        try {
            setLoading(true);
            const response = await axios.get(`https://api.unsplash.com/photos/random?client_id=${CLIENT_ID}`);
            console.log(response.data);
            setWallpaper(response.data);
            setLoading(false);
        } catch (error) {
            console.log("Error getting wallpaper.");
            setLoading(true);
        }
    }

    useEffect(() => {
        getWallpaper();
    }, [])

    const style = {
        backgroundImage: `url(${wallpaper.urls.full})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh"
    }

    return(
        <div>
            {loading && <p>Now Loading...</p>}
            {!loading && <div style={style}></div>}
        </div>
        // 
    )
}