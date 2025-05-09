export default function BarChart({ title, data, max = 6 }) {
	const scale = 30;
	const startX = 150;
	const barHeight = 10;
  
	return (
	  <svg width="100%" height={data.length * 60 + 80} viewBox={`0 0 400 ${data.length * 60 + 80}`} xmlns="http://www.w3.org/2000/svg">
		<text x="200" y="20" textAnchor="middle" fontSize="16" fontWeight="bold">{title}</text>
  
		{data.map((item, i) => {
		  const y = 30 + i * 50;
		  const missWidth = item.falhou * scale;
		  const hitWidth = item.acertou * scale;
  
		  return (
			<g key={i}>
			  <text x="0" y={y + 10} fontSize="12">{item.label}</text>
			  <rect x={startX} y={y} width={missWidth} height={barHeight} fill="#EF4444" />
			  <text x={startX + missWidth + 5} y={y + 9} fontSize="12">{item.falhou}</text>
  
			  <rect x={startX} y={y + 15} width={hitWidth} height={barHeight} fill="#84CC16" />
			  <text x={startX + hitWidth + 5} y={y + 24} fontSize="12">{item.acertou}</text>
			</g>
		  );
		})}
  
		{/* Axis line and ticks */}
		<line x1={startX} y1={data.length * 50 + 20} x2={startX + max * scale} y2={data.length * 50 + 20} stroke="#aaa" strokeWidth="1" />
		{[...Array(max + 1)].map((_, i) => (
		  <text key={i} x={startX + i * scale} y={data.length * 50 + 35} fontSize="10">{i}</text>
		))}
  
		{/* Legend */}
		<rect x="20" y={data.length * 50 + 45} width="15" height="15" fill="#84CC16" />
		<text x="40" y={data.length * 50 + 57} fontSize="10">Acertou</text>
  
		<rect x="120" y={data.length * 50 + 45} width="15" height="15" fill="#EF4444" />
		<text x="140" y={data.length * 50 + 57} fontSize="10">Falhou</text>
	  </svg>
	);
  }
  