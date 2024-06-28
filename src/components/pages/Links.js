import styles from './Links.module.css';

import { FaInstagram, FaTiktok, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Stack from "react-bootstrap/Stack";

function Links() {
    return (
        <div className="container">
            <h1 className="display-5 mt-5">Redes sociais</h1>
            <Stack className={styles.customLinks}>
                <div className="p-2">
                    <FaInstagram />&nbsp;
                    <span><a href="https://www.instagram.com/official_g_i_dle">Instagram</a></span>
                </div>
                <div className="p-2">
                    <FaTiktok />&nbsp;
                    <span><a href="https://tiktok.com/official_gidle">TikTok</a></span>
                </div>
                <div className="p-2">
                    <FaXTwitter />&nbsp;
                    <span><a href="https://x.com/G_I_DLE">X (antigo Twitter)</a></span>
                </div>
                <div className="p-2">
                    <FaFacebook />&nbsp;
                    <span><a href="https://www.facebook.com/G.I.DLE.CUBE">Facebook</a></span>
                </div>
                <div className="p-2">
                    <FaYoutube />&nbsp;
                    <span><a href="https://www.youtube.com/gidleofficial">YouTube</a></span>
                </div>
            </Stack>
        </div>
    )
}

export default Links