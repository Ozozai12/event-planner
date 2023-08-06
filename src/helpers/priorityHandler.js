const priorityHandler = priority => {
  switch (priority) {
    case 'Low':
      return <span style={{ color: '#6BD475' }}>{priority}</span>;
    case 'Medium':
      return <span style={{ color: '#E2A300' }}>{priority}</span>;
    case 'High':
      return <span style={{ color: '#FF2B77' }}>{priority}</span>;
    default:
      return <span style={{ color: '#f3f3f3' }}>{priority}</span>;
  }
};

export default priorityHandler;
