import '../resume.css'
export default function Resume() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Resume</h1>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card borderless-card">
            <div className="card-body">
              <h3 className="card-title">Technical Skills</h3>
                <li>React</li>
                <li>Node</li>
                <li>Express</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card borderless-card">
            <div className="card-body">
              <h3 className="card-title">Soft Skills</h3>
                <li>Years of management experience</li>
                <li>Designed multiple successful small businesses</li>
                <li>Work well within a team structure</li>
                <li>Outside the box thinking</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}