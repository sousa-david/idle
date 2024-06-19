import { SocialIcon } from "react-social-icons";
import Stack from "react-bootstrap/Stack";

function Links() {
    return (
        <div className="container">
            <h1 className="display-5 mt-5">Redes sociais</h1>
            <Stack>
                <div className="p-2">
                    <SocialIcon network="instagram" />&nbsp;
                    <span><a href="https://www.instagram.com/official_g_i_dle">Instagram</a></span>
                </div>
                <div className="p-2">
                    <SocialIcon network="tiktok" />&nbsp;
                    <span><a href="https://tiktok.com/official_gidle" className="text-decoration-none">TikTok</a></span>
                </div>
                <div className="p-2">
                    <SocialIcon network="x" />&nbsp;
                    <span><a href="https://x.com/G_I_DLE">X (antigo Twitter)</a></span>
                </div>
                <div className="p-2">
                    <SocialIcon network="facebook" />&nbsp;
                    <span><a href="https://www.facebook.com/G.I.DLE.CUBE">Facebook</a></span>
                </div>
            </Stack>
        </div>
    )
}

export default Links