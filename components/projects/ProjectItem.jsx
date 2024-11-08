import Image from 'next/image';

const ProjectItem = ({ title, description, description1, image }) => {
  return (
    <div className="flex flex-col overflow-hidden text-white rounded-lg shadow-lg md:flex-row px-50" style={{marginTop: '64px'}}>
      <div className="w-full md:w-1/2 mt-50">
        <Image 
          src={image}
          alt={title}
          style={{borderRadius: '30px', height: '100%'}}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col p-6 md:w-1/2">
        <div className='my-auto'>
            <div>
                <h3 className="mb-5" style={{fontSize: '30px', lineHeight: '50px', alignItems: 'center', color: '#F8F8F8'}}>{title}</h3>
                <p className="mb-5" style={{fontSize: '17px', lineHeight: '26px', color: '#F8F8F8'}}>{description}</p>
                <p className="mb-5" style={{fontSize: '17px', lineHeight: '26px', color: '#F8F8F8'}}>{description1}</p>
            </div>
            <div>
                {/* <button
                    style={{boxSizing: 'border-box', background: '#0B556F', border: '1px solid #0B556F', borderRadius: '20px', width: '262.75px', height: '52px', fontSize: '17px', lineHeight: '20px'}}
                >
                    View this project
                </button> */}
                <button
                  className="
                    box-border
                    bg-[#0B556F]
                    border
                    border-[#0B556F]
                    rounded-[20px]
                    w-[262.75px]
                    h-[52px]
                    text-[17px]
                    leading-[20px]
                    text-white
                    transition
                    duration-300
                    hover:bg-[#083A48]
                    hover:border-[#083A48]
                  "
                >
                  View this project
                </button>

            </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
