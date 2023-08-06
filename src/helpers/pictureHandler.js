const pictureHandler = category => {
  switch (category) {
    case 'Art':
      return 'https://res.cloudinary.com/dmadhdzzm/image/upload/v1690989810/event-planner/Rectangle_330_kwfmpo.jpg';
    case 'Music':
      return 'https://res.cloudinary.com/dmadhdzzm/image/upload/v1690989811/event-planner/Rectangle_349_kzxlzd.jpg';
    case 'Business':
      return 'https://res.cloudinary.com/dmadhdzzm/image/upload/v1690989811/event-planner/Rectangle_347_hkhrsu.jpg';
    case 'Conference':
      return 'https://res.cloudinary.com/dmadhdzzm/image/upload/v1690989811/event-planner/Rectangle_345_kjnqzr.jpg';
    case 'Workshop':
      return 'https://res.cloudinary.com/dmadhdzzm/image/upload/v1690989811/event-planner/Rectangle_346_xprzvi.jpg';
    case 'Party':
      return 'https://res.cloudinary.com/dmadhdzzm/image/upload/v1690989812/event-planner/Rectangle_344_rvksfj.jpg';
    case 'Sport':
      return 'https://res.cloudinary.com/dmadhdzzm/image/upload/v1690989812/event-planner/Rectangle_350_krqfy6.jpg';

    default:
      return 'https://res.cloudinary.com/dmadhdzzm/image/upload/v1690989811/event-planner/Rectangle_348_rmsaqx.jpg';
  }
};

export default pictureHandler;
