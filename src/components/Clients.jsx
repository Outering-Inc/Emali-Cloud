import { clients } from "../constants";
import styles from "../style";

const Clients = () =>  (
    <section className={`${styles.flexCenter} my-4 `}>
      <div className={`${styles.flexCenter} flex-wrap w-full `}>
        {clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
            <img src={client.logo} alt="client" className="sm:w-[192px] w-[100px] object-contain"/>
            {/**Gradint at the left*/}
            <div className="absolute z-[0] w-[60%] h-[60%] -left-[50%] roundend-full blue__gradient"/>
          </div>
        ))}
      </div>
    </section>
  )

export default Clients;