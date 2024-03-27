import Link from "next/link";


export default function Footer() {
    return (
        <>
        <div className="footer-div">
            <div className="footer-split">
                <span>Generic Trademark</span>
                <span>Stort tack till kaffe.</span>
            </div>
            <div className="footer-right">
                <span>
                    <Link className="foot-link" href="https://github.com/Joelljunggren" target="_blank">Github</Link>
                </span>
                <span>
                    <Link className="foot-link" href="https://www.linkedin.com/in/joel-ljunggren-456368250/" target="_blank">Linkedin</Link>
                </span>
            </div>
        </div>
        </>
    )
}