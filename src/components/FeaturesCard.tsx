interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeaturesCard: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="col-12 col-md-4 mb-3 d-grid align-items-stretch ">
      <div className="card bg-primary-dark-70 rounded rounded-4 p-md-3">
        <div className="card-body  d-flex flex-md-column flex-row align-items-center font-josefin  gap-3 gap-md-0   justify-content-start">
          <span className="d-block ">{icon}</span>
          <div className="">
            <h2 className="text-white mt-md-4 f-size-20 mb-0 mb-md-auto text-md-center ">
              {title}
            </h2>
            <span className="f-size-16 text-white-50 d-block  text-md-center">
              {description}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
