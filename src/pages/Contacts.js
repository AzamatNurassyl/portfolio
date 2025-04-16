const Contacts = () => {
    return ( 
        <main className="section">
            <div className="container">
                <h1 className="title-1">Contacts</h1>
                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <a href="https://www.google.com/maps?sca_esv=a7528baf20b27cbb&output=search&q=medina&source=lnms&fbs=ABzOT_CWdhQLP1FcmU5B0fn3xuWpA-dk4wpBWOGsoR7DG5zJBjnSuuKZNj-6zieDk_gkn6CyymgG_tEVFNWvBwycIom9UnIAOh5vZNnNHE5VVcJHgBYFLjjOsfNa6NzvFe20hyd7diL37i_CtZr9MQIoWfa4i8IlyXe2rur99Xu0f7QIOVoZ-IraIvPozE_lBlZ9vCONaI6p3_WWZUBEIayNmaceW41a_A&entry=mc&ved=1t:200715&ictx=111" className="title-text">Saudi Arabia, Medina</a>
                    </li>
                    <li className="content-list__item">
                        <h3 className="title-2">Telegram / WhatsApp</h3>
                        <a href="https://wa.me/+77776669591" className="title-text"> +7 (777) 666-95-91 </a>
                    </li>
                    <li className="content-list__item">
                        <h4 className="title-2">Email</h4>
                    <a href="mailto:azamatnurassyl@gmail.com" className="title-text">azamatnurassyl@gmail.com</a>
                    </li>
                </ul>
            
            </div>
    </main>

     );
}
 
export default Contacts;