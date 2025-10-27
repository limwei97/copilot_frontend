"use client";
import "@copilotkit/react-ui/styles.css";
import { MessagesProps, CopilotSidebar, AssistantMessageProps, Markdown, useChatContext } from "@copilotkit/react-ui";
import { CopilotKitCSSProperties } from "@copilotkit/react-ui";

const CustomAssistantMessage = (props: AssistantMessageProps) => {
  const { icons } = useChatContext();
  const { message, isLoading, rawData} = props;
  const messageStyles = "px-4 rounded-xl pt-2";

  return (
    <div className="py-2">
      <div className="flex items-start flex-col">
        <div className={messageStyles}>
          {message && <Markdown content={message.content || ""} /> }
          {isLoading && icons.spinnerIcon}
        </div>
        {/* {rawData?.toolCalls && rawData.toolCalls.length > 0 && (
          <div style={{color:'yellow', border: 'yellow', marginTop: '10px', padding: '10px', backgroundColor: '#333'}}>
            <pre>{JSON.stringify(rawData.toolCalls.map((x: { function: Array<Map<string,string>>; }) => x.function), null, 2)}</pre>
          </div>
        )}
        {rawData?.state && (
          <div style={{color:'yellow', border: 'yellow', marginTop: '10px', padding: '10px', backgroundColor: '#333'}}>
              <pre>{JSON.stringify(rawData.state, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  ); */}
   </div>
    </div>
  );
};

function Dashboard() {
  return (
    <div className="flex h-screen bg-background font-sans text-foreground">
      {/* Sidebar */}
      <aside className="w-64 bg-card flex flex-col p-6 border-r border-border">
        <div className="flex items-center mb-10">
          <img 
            alt="AI VEVA Logo" 
            className="h-10 w-10 mr-2" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6KIBi4tM0e4C1VokR8K-PqLM89KrIZV9KRKSqBuOd3BdY-KK_DuPBoGyWNOWFvgWGtvnqLxE1AC2VEbtO4-WFnJNxMFgeJJsw6dZd6ZoYcnTdCv6ovjHeUDHW6kQrIFxl9d8UN0R1400y3svut0mksRzFwssRDqxCMOBfVv0Ig1LdVokftEQvorCBDqW1FmaxhkSdfK5NCGHTXlDUcwh0YU2hvOJEsa_PAL_7BfHM6WEC6xa3TDCErrsyNRoBcmx7Wk1feUXF6MTl"
          />
          <div>
            <h1 className="text-xl font-bold text-foreground">AI VEVA</h1>
            <p className="text-xs text-text-secondary">Seamless Manufacturing</p>
          </div>
        </div>
        
        <nav className="flex-grow">
          <h2 className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-4">General</h2>
          <ul>
            <li className="mb-2">
              <a className="flex items-center p-2 rounded-lg bg-foreground text-background" href="#">
                <span className="material-icons mr-3">dashboard</span>
                <span>Dashboard</span>
              </a>
            </li>
            <li className="mb-2">
              <a className="flex items-center p-2 rounded-lg text-text-secondary hover:bg-card-hover" href="#">
                <span className="material-icons mr-3">inventory_2</span>
                <span>Inventory</span>
              </a>
            </li>
            <li className="mb-2">
              <a className="flex items-center p-2 rounded-lg text-text-secondary hover:bg-card-hover" href="#">
                <span className="material-icons mr-3">calendar_today</span>
                <span>Planning</span>
              </a>
            </li>
            <li className="mb-2">
              <a className="flex items-center p-2 rounded-lg text-text-secondary hover:bg-card-hover" href="#">
                <span className="material-icons mr-3">trending_up</span>
                <span>Cost Tracking</span>
              </a>
            </li>
            <li className="mb-2">
              <a className="flex items-center p-2 rounded-lg text-text-secondary hover:bg-card-hover" href="#">
                <span className="material-icons mr-3">assessment</span>
                <span>Reports</span>
              </a>
            </li>
            <li className="mb-2">
              <a className="flex items-center p-2 rounded-lg text-text-secondary hover:bg-card-hover" href="#">
                <span className="material-icons mr-3">assistant</span>
                <span>AI Assistant</span>
              </a>
            </li>
          </ul>
          
          <h2 className="text-xs font-semibold text-text-secondary uppercase tracking-wider mt-10 mb-4">Support</h2>
          <ul>
            <li className="mb-2">
              <a className="flex items-center p-2 rounded-lg text-text-secondary hover:bg-card-hover" href="#">
                <span className="material-icons mr-3">settings</span>
                <span>Settings</span>
              </a>
            </li>
            <li className="mb-2">
              <a className="flex items-center p-2 rounded-lg text-text-secondary hover:bg-card-hover" href="#">
                <span className="material-icons mr-3">logout</span>
                <span>Log Out</span>
              </a>
            </li>
          </ul>
        </nav>
        
        <div className="mt-auto">
          <div className="flex space-x-4 mb-4">
            <a className="text-text-secondary hover:text-foreground" href="#">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.59 0 0 .59 0 1.325v21.35C0 23.41.59 24 1.325 24H12.82v-9.29H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.735 0 1.325-.59 1.325-1.325V1.325C24 .59 23.41 0 22.675 0z"></path></svg>
            </a>
            <a className="text-text-secondary hover:text-foreground" href="#">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.424.727-.666 1.581-.666 2.477 0 1.62.823 3.055 2.072 3.882-.76-.025-1.475-.232-2.104-.577v.058c0 2.263 1.606 4.148 3.738 4.573-.39.106-.803.163-1.227.163-.3 0-.593-.028-.877-.082.592 1.854 2.308 3.204 4.343 3.242-1.594 1.248-3.604 1.992-5.786 1.992-.375 0-.746-.022-1.112-.065 2.062 1.32 4.512 2.088 7.14 2.088 8.564 0 13.255-7.098 13.255-13.254 0-.202-.005-.403-.014-.602A9.46 9.46 0 0024 4.557z"></path></svg>
            </a>
          </div>
          <p className="text-xs text-text-secondary">Privacy Policy</p>
          <p className="text-xs text-text-secondary">Terms &amp; Conditions</p>
          <p className="text-xs text-text-secondary mt-2">© 2025</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Welcome Back, Amirah</h1>
            <p className="text-text-secondary">Here are your daily updates</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary">search</span>
              <input 
                className="bg-card border border-border rounded-full py-2 pl-10 pr-4 text-foreground focus:outline-none focus:ring-2 focus:ring-black" 
                placeholder="Search" 
                type="text"
              />
            </div>
            <button className="p-2 rounded-full bg-card text-text-secondary border border-border">
              <span className="material-icons">notifications</span>
            </button>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
              <div>
                <p className="font-semibold text-foreground">Amirah</p>
                <p className="text-xs text-text-secondary">Production Manager</p>
              </div>
            </div>
          </div>
        </header>

        {/* Production Schedule */}
        <section className="bg-card p-6 rounded-lg mb-8 border border-border">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-foreground">Production Schedule</h2>
            <div className="flex items-center space-x-2">
              <button className="bg-card-hover text-foreground px-3 py-1 rounded-md text-sm border border-border">Today</button>
              <select className="bg-card-hover text-foreground px-3 py-1 rounded-md text-sm border-border border focus:ring-0">
                <option>Sep</option>
              </select>
              <select className="bg-card-hover text-foreground px-3 py-1 rounded-md text-sm border-border border focus:ring-0">
                <option>2023</option>
              </select>
              <button className="bg-foreground text-background px-3 py-1 rounded-md text-sm flex items-center">
                <span className="material-icons text-sm mr-1">filter_alt</span>
                Filter
              </button>
            </div>
          </div>
          
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-4 text-xs text-text-secondary">
              <span>Legend:</span>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-sm bg-green-500 mr-1"></div>
                Unsweetened Chocolate
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-sm bg-blue-500 mr-1"></div>
                Milk Chocolate
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-sm bg-purple-500 mr-1"></div>
                Dark Chocolate
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-sm bg-yellow-300 mr-1"></div>
                White Chocolate
              </div>
            </div>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md text-sm">Change Schedule</button>
          </div>
          
          <div className="grid grid-cols-7 gap-1 text-center text-sm">
            <div className="text-text-secondary font-semibold py-2">Mon</div>
            <div className="text-text-secondary font-semibold py-2">Tue</div>
            <div className="text-text-secondary font-semibold py-2">Wed</div>
            <div className="text-text-secondary font-semibold py-2">Thu</div>
            <div className="text-text-secondary font-semibold py-2">Fri</div>
            <div className="text-text-secondary font-semibold py-2">Sat</div>
            <div className="text-text-secondary font-semibold py-2">Sun</div>
            
            <div className="py-2 text-text-secondary">28</div>
            <div className="py-2 text-text-secondary">29</div>
            <div className="py-2 text-text-secondary">30</div>
            <div className="py-2 text-text-secondary">31</div>
            <div className="bg-card-hover rounded-md py-2 text-foreground">1</div>
            <div className="bg-card-hover rounded-md py-2 text-foreground">2</div>
            <div className="bg-card-hover rounded-md py-2 text-foreground">3</div>
            
            <div className="bg-card-hover rounded-md py-2 text-foreground">4</div>
            <div className="bg-card-hover rounded-md py-2 text-foreground">5</div>
            <div className="bg-card-hover rounded-md py-2 text-foreground">6</div>
            <div className="bg-card-hover rounded-md py-2 text-foreground">7</div>
            <div className="bg-card-hover rounded-md py-2 text-foreground">8</div>
            <div className="bg-card-hover rounded-md py-2 text-foreground">9</div>
            <div className="bg-card-hover rounded-md py-2 text-foreground">10</div>
            
            <div className="bg-yellow-400 rounded-md py-2 text-black relative">
              11
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </div>
            <div className="bg-card-hover rounded-md py-2 text-foreground">12</div>
            <div className="bg-card-hover rounded-md py-2 text-foreground">13</div>
            <div className="bg-card-hover rounded-md py-2 text-foreground">14</div>
            <div className="bg-card-hover rounded-md py-2 text-foreground">15</div>
            <div className="bg-card-hover rounded-md py-2 text-foreground">16</div>
            <div className="bg-card-hover rounded-md py-2 text-foreground">17</div>
            
            <div className="bg-card-hover rounded-md py-2 text-foreground">18</div>
            <div className="bg-card-hover rounded-md py-2 text-foreground">19</div>
            <div className="bg-card-hover rounded-md py-2 text-foreground">20</div>
            <div className="bg-card-hover rounded-md py-2 text-foreground">21</div>
            <div className="bg-card-hover rounded-md py-2 text-foreground">22</div>
            <div className="bg-card-hover rounded-md py-2 text-foreground">23</div>
            <div className="bg-card-hover rounded-md py-2 text-foreground">24</div>
            
            <div className="bg-card-hover rounded-md py-2 text-foreground">25</div>
            <div className="bg-card-hover rounded-md py-2 text-foreground">26</div>
            <div className="bg-card-hover rounded-md py-2 text-foreground">27</div>
            <div className="bg-card-hover rounded-md py-2 text-foreground">28</div>
            <div className="bg-card-hover rounded-md py-2 text-foreground">29</div>
            <div className="bg-card-hover rounded-md py-2 text-foreground">30</div>
            <div className="py-2 text-text-secondary">1</div>
          </div>
        </section>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Production Volume */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4">Production Volume</h3>
            <p className="text-2xl font-bold text-foreground">
              9,040 kg <span className="text-green-500 text-sm">+3.6%</span>
            </p>
          </div>

          {/* Downtime */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4">Downtime</h3>
            <p className="text-2xl font-bold text-foreground">
              4h 10m <span className="text-green-500 text-sm">+5.7%</span>
            </p>
          </div>

          {/* Machines Active */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-foreground">Machines Active</h3>
              <span className="text-red-500 font-bold text-xs">LIVE</span>
            </div>
            <p className="text-2xl font-bold text-foreground">17 / 20</p>
          </div>
        </div>

        {/* Material Inventory */}
        <section className="bg-card p-6 rounded-lg border border-border">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-foreground">Material Inventory Overview</h2>
            <button className="bg-foreground text-background px-3 py-1 rounded-md text-sm flex items-center">
              <span className="material-icons text-sm mr-1">filter_alt</span>
              Filter
            </button>
          </div>
          <table className="w-full text-sm text-left text-text-secondary">
            <thead className="text-xs uppercase bg-card-hover text-text-secondary">
              <tr>
                <th scope="col" className="px-6 py-3">Item</th>
                <th scope="col" className="px-6 py-3">Supplier</th>
                <th scope="col" className="px-6 py-3">Manufacturing Date</th>
                <th scope="col" className="px-6 py-3">Expiration Date</th>
                <th scope="col" className="px-6 py-3">Quantity</th>
                <th scope="col" className="px-6 py-3">Stock Level</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-card border-b border-border">
                <td className="px-6 py-4 font-medium text-foreground whitespace-nowrap">Cocoa Beans</td>
                <td className="px-6 py-4">Mueller Inc.</td>
                <td className="px-6 py-4">01 Mar 2024</td>
                <td className="px-6 py-4">01 Mar 2025</td>
                <td className="px-6 py-4">10,000 kg</td>
                <td className="px-6 py-4">
                  <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Full</span>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default function YourApp() {
    return (
        <main>
        <h1>
          <Dashboard/>
        </h1>
        <div style={
          {
            "--copilot-kit-primary-color": "#ffffffff",
            "--copilot-kit-background-color": "#222222",
            "--copilot-kit-contrast-color": "#000000ff",
            "--copilot-kit-secondary-color": "#c9c9c9ff",
            "--copilot-kit-secondary-contrast-color": "#ffffffff",
            "--copilot-kit-separator-color": "#878787ff",
            "--copilot-kit-muted-color": "#ffffffff",
            "--copilot-kit-error-background": "#222222",

          } as CopilotKitCSSProperties
          
        }>
        <CopilotSidebar 
            labels={{
                title: "Manufacturing Data Agent",
                initial: "Hi! I'm connected to an agent. How can I help?",
            }}
            AssistantMessage={CustomAssistantMessage}
        />
        </div>
        </main>
    );
}