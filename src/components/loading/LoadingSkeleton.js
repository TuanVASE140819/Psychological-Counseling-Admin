import React from "react";

const LoadingSkeleton = () => {
    return (
        <div className="loading-skeleton-chart" style={{
            width: "364px",
            height: "220px",
            borderRadius: "5px",
        }}>
        <div className="loading-skeleton-chart-vistior"style={{
            width: "364px",
            height: "24px",
            borderRadius: "5px",
            padding: "20px",
        }}></div>
        </div>
    );
    }

export default LoadingSkeleton;