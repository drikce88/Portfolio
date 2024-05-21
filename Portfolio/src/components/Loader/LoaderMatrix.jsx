import React, { useState, useEffect } from "react";
import "../Loader/LoaderMatrix.scss";

const LoaderMatrix = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return showLoader ? (
    <div className="loader-matrix-container">
      <div className="loader-matrix">
        <div className="matrix-row">
          <div className="matrix-character">
            010101010001001001001010100100110110101101110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100100010010101110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100101110111001110111011001001011001001
          </div>
        </div>
        <div className="matrix-row">
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
        </div>
        <div className="matrix-row">
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
        </div>
        <div className="matrix-row">
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
        </div>
        <div className="matrix-row">
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
        </div>
        <div className="matrix-row">
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
        </div>
        <div className="matrix-row">
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
        </div>
        <div className="matrix-row">
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
        </div>
        <div className="matrix-row">
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
        </div>
        <div className="matrix-row">
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
        </div>
        <div className="matrix-row">
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
        </div>
        <div className="matrix-row">
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
        </div>
        <div className="matrix-row">
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
        </div>
        <div className="matrix-row">
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
        </div>
        <div className="matrix-row">
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
        </div>
        <div className="matrix-row">
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
        </div>
        <div className="matrix-row">
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
        </div>
        <div className="matrix-row">
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
        </div>
        <div className="matrix-row">
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
        </div>
        <div className="matrix-row">
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
        </div>
        <div className="matrix-row">
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
        </div>
        <div className="matrix-row">
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
        </div>
        <div className="matrix-row">
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
        </div>
        <div className="matrix-row">
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
        </div>
        <div className="matrix-row">
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
        </div>
        <div className="matrix-row">
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
        </div>
        <div className="matrix-row">
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
        </div>
        <div className="matrix-row">
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
        </div>
        <div className="matrix-row">
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
        </div>
        <div className="matrix-row">
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
        </div>
        <div className="matrix-row">
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
        </div>
        <div className="matrix-row">
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
        </div>
        <div className="matrix-row">
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
          <div className="matrix-character">
            010101010001001001001010100100111110000001110111011001001011001001
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default LoaderMatrix;
