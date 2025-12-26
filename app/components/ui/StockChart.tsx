import React from 'react';
import { Part } from '@/lib/types';

interface StockChartProps {
    part: Part;
}

export const StockChart: React.FC<StockChartProps> = ({ part }) => {
    const history = [...(part.movements || [])].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    if (history.length < 2) return (
        <div className="mt-8 bg-black/5 border border-black/5 rounded-[15px] p-6 text-center">
            <p className="text-xs text-app-text-muted font-semibold uppercase tracking-wider">Insufficient trend data</p>
        </div>
    );

    // Reconstruction of balance history based on current quantity
    // We work backwards to find previous levels
    let reconstruction = [{ date: 'Now', val: part.qty }];
    let runningQty = part.qty;

    const reversedHistory = [...history].reverse();
    reversedHistory.forEach((move, i) => {
        if (move.type === 'inbound') runningQty -= move.qty;
        else if (move.type === 'transfer' || move.type === 'adjustment') runningQty += move.qty;

        reconstruction.unshift({
            date: move.date.split('-').slice(1).join('/'),
            val: Math.max(0, runningQty)
        });
    });

    // Limit to last 6 points for clarity on mobile
    const plotPoints = reconstruction.slice(-6);

    const width = 320;
    const height = 120;
    const paddingX = 40;
    const paddingY = 25;

    const maxVal = Math.max(...plotPoints.map(p => p.val)) || 10;
    const minVal = Math.min(...plotPoints.map(p => p.val));
    const range = (maxVal - minVal) || 10;

    const getX = (index: number) => (index / (plotPoints.length - 1)) * (width - paddingX * 2) + paddingX;
    const getY = (val: number) => height - ((val - minVal) / range) * (height - paddingY * 2) - paddingY;

    const pathD = plotPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(p.val)}`).join(' ');
    const areaD = `${pathD} L ${getX(plotPoints.length - 1)} ${height} L ${getX(0)} ${height} Z`;

    return (
        <div className="mt-8 bg-black/5 border border-app-border rounded-[15px] p-6 text-left relative overflow-hidden group">
            <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold text-[10px] uppercase tracking-wider flex items-center gap-2 text-app-text-muted">
                    <i className="fa-solid fa-chart-line text-brand-primary"></i>
                    Stock Trends
                </h3>
                <span className="text-[10px] font-bold text-brand-success uppercase tracking-wider">+12% vs LY</span>
            </div>

            <div className="relative w-full h-[120px]">
                <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible">
                    <defs>
                        <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
                        </linearGradient>
                    </defs>

                    {/* Horizontal Grid Lines */}
                    <line x1={paddingX} y1={getY(maxVal)} x2={width - paddingX} y2={getY(maxVal)} stroke="rgba(0,0,0,0.05)" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1={paddingX} y1={getY(minVal)} x2={width - paddingX} y2={getY(minVal)} stroke="rgba(0,0,0,0.05)" strokeWidth="1" strokeDasharray="4 4" />

                    {/* Area Fill */}
                    <path d={areaD} fill="url(#chartFill)" />

                    {/* Line Path */}
                    <path
                        d={pathD}
                        fill="none"
                        stroke="#7C3AED"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="drop-shadow-[0_4px_10px_rgba(124,58,237,0.2)]"
                    />

                    {/* Points */}
                    {plotPoints.map((p, i) => (
                        <circle
                            key={i}
                            cx={getX(i)}
                            cy={getY(p.val)}
                            r="4"
                            fill="#FFFFFF"
                            stroke="#7C3AED"
                            strokeWidth="2"
                        />
                    ))}
                </svg>
            </div>

            <div className="flex justify-between mt-4 px-2">
                {plotPoints.map((p, i) => (
                    <div key={i} className="flex flex-col items-center">
                        <span className="text-[8px] font-semibold text-app-text-muted uppercase tracking-wider">{p.date}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};


