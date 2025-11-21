import '@styles/Paper.css';

function Paper() {
    return (
        <div className="paperContainer">
            <div className="paperViewer">
                <h1 className="paperTitle">Learning Hiragana With Machine Learning</h1>
                <iframe
                    src="/PORTAFOLIO/paper_hiragana.pdf"
                    className="pdfFrame"
                    title="Learning Hiragana With Machine Learning PDF"
                />
            </div>
        </div>
    );
}

export default Paper;
