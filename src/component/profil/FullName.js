function FullName(){
    const linkedinProfile = "https://www.linkedin.com/in/ivan-cesar-epinzagne-499b99142/";
    return (
        <h1 >
            <a href={linkedinProfile} target="_blank"> <i style={{color:"blue"}} class="bi bi-linkedin"></i>ivan cesar epinzagne </a>
        </h1>
    );
}

export default FullName;