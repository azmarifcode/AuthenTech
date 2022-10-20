import { useContext } from 'react';
import ethImg from '../assets/eth.jpeg'
import { AuthContext } from '../Context/UserContext';

const Wallet = () =>
{
  const {user} = useContext(AuthContext)
  return (
      <section className="bg-gray-100 text-gray-900 min-h-screen">
          {user?.emailVerified ? (
              <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                  <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                      <img
                          src={ethImg}
                          alt=""
                          className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                      />
                  </div>
                  <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                      <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                          Balance: 3,2244
                      </h1>
                      <p className="mt-6 mb-8 text-lg sm:mb-12">
                          Originally referred to as Ethereum 2.0, the merge is
                          an upgraded version of the Ethereum blockchain that
                          uses a proof-of-stake consensus mechanism to verify
                          transactions via staking.
                      </p>
                      <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                          <button className="px-8 py-3 text-lg font-semibold rounded bg-gray-800 hover:bg-gray-700 text-gray-100">
                              Spend
                          </button>
                          <button className="px-8 py-3 text-lg font-semibold border rounded border-gray-900">
                              Earn
                          </button>
                      </div>
                  </div>
              </div>
          ) : (
              <div className="flex justify-center p-40">
                  <p className="text-4xl text-center">
                      Please Verify Your Email.
                      <br />
                      Verification Link Has Been Sent to Your Email Address
                  </p>
              </div>
          )}
      </section>
  );
}

export default Wallet
