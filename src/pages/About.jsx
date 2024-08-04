import profilePicture from '../assets/dave.png'

export default function About() {
    return (
      <>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      {/* <h1 className="text-center">About Me</h1> */}
      <img src={profilePicture}alt="Profile" style={{ width: '150px', height: '150px', borderRadius: '20%', marginBottom: '20px' }} />
      <div className="text-wrap" style={{ width: '30rem', textAlign: 'justify' }}>
        Thank you for coming by and checking out my portfolio page. My name is David and I am a software engineer from
        St. Petersburg Florida. I am specializing in the MERN programming stack with a focus on web devolpement for retail
        business. Please take some time to view some of my work using the portfolio link above and if you like my work
        or have any questions please use the contact tab to reach out to me directly. There is also an attached resume that
        you can download in the links above.
      </div>
      </div>
    </>
    );
  }
  