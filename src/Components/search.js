filter((element)=>{
    const searchTitle = element.title.indexOf(props.search);
    const searchDescription = element.description.indexOf(props.search);
    if (!(searchTitle === -1 || searchDescription === -1)) return true;
    else return false;
  })