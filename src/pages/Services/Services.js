import React from "react";
import { Button } from "../../globalStyles";
import {
  SeviceSection,
  SeviceWrapper,
  SeviceHeading,
  SeviceContainer,
} from "./Services.elements";

const Services = () => {
  return (
    <SeviceSection>
      <SeviceWrapper>
        <SeviceHeading>Our Services</SeviceHeading>
        <SeviceContainer>
          <div className="card">
            <div className="image">
              <img
                src={require("../../images/kitchen-proter.jpg")}
                alt="logo"
              />
              <h3>kitchen Proter</h3>
            </div>
            <div className="content">
              <p>
                London Weighting Area (E, EC, W, EC, SE, SW, N, NW, BR, CR, DA,
                HA, KT, TN, TW, and UB postcodes)
              </p>
              <p>
                Standard Rate: £13.05/hour (London Living Wage) 48 Hours Notice:
                £12/hour 24 Hours Notice: £13/hour On The Day: £15/hour
              </p>
              <Button>
                <a href="#">Contact US</a>
              </Button>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img src={require("../../images/chef.jpg")} alt="logo" />
              <h3>Chef</h3>
            </div>
            <div className="content">
              <p>
                London Weighting Area (E, EC, W, EC, SE, SW, N, NW, BR, CR, DA,
                HA, KT, TN, TW, and UB postcodes)
              </p>
              <p>
                Standard Rate: £15.50/hour (London Living Wage) 48 Hours Notice:
                £12/hour 24 Hours Notice: £13/hour On The Day: £15/hour
              </p>
              <Button>
                <a href="#">Contact US</a>
              </Button>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img src={require("../../images/waiter.jpg")} alt="logo" />
              <h3>Waiter</h3>
            </div>
            <div className="content">
              <p>
                London Weighting Area (E, EC, W, EC, SE, SW, N, NW, BR, CR, DA,
                HA, KT, TN, TW, and UB postcodes)
              </p>
              <p>
                Standard Rate: £13.50/hour (London Living Wage) 48 Hours Notice:
                £12/hour 24 Hours Notice: £13/hour On The Day: £15/hour
              </p>
              <Button>
                <a href="#">Contact US</a>
              </Button>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img src={require("../../images/runner.jpg")} alt="logo" />
              <h3>Runner</h3>
            </div>
            <div className="content">
              <p>
                London Weighting Area (E, EC, W, EC, SE, SW, N, NW, BR, CR, DA,
                HA, KT, TN, TW, and UB postcodes)
              </p>
              <p>
                Standard Rate: £13.50/hour (London Living Wage) 48 Hours Notice:
                £12/hour 24 Hours Notice: £13/hour On The Day: £15/hour
              </p>
              <Button>
                <a href="#">Contact US</a>
              </Button>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img src={require("../../images/clean.jpg")} alt="logo" />
              <h3>Cleaning Staff</h3>
            </div>
            <div className="content">
              <p>
                London Weighting Area (E, EC, W, EC, SE, SW, N, NW, BR, CR, DA,
                HA, KT, TN, TW, and UB postcodes)
              </p>
              <p>
                Standard Rate: £13.50/hour (London Living Wage) 48 Hours Notice:
                £12/hour 24 Hours Notice: £13/hour On The Day: £15/hour
              </p>
              <Button>
                <a href="#">Contact US</a>
              </Button>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img src={require("../../images/event.jpg")} alt="logo" />
              <h3>Event Staff</h3>
            </div>
            <div className="content">
              <p>
                London Weighting Area (E, EC, W, EC, SE, SW, N, NW, BR, CR, DA,
                HA, KT, TN, TW, and UB postcodes)
              </p>
              <p>
                Standard Rate: £13.50/hour (London Living Wage) 48 Hours Notice:
                £12/hour 24 Hours Notice: £13/hour On The Day: £15/hour
              </p>
              <Button>
                <a href="#">Contact US</a>
              </Button>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img src={require("../../images/wedding.jpg")} alt="logo" />
              <h3>Wedding Staf</h3>
            </div>
            <div className="content">
              <p>
                London Weighting Area (E, EC, W, EC, SE, SW, N, NW, BR, CR, DA,
                HA, KT, TN, TW, and UB postcodes)
              </p>
              <p>
                Standard Rate: £13.50/hour (London Living Wage) 48 Hours Notice:
                £12/hour 24 Hours Notice: £13/hour On The Day: £15/hour
              </p>
              <Button>
                <a href="/contact">Contact US</a>
              </Button>
            </div>
          </div>
        </SeviceContainer>
      </SeviceWrapper>
    </SeviceSection>
  );
};
export default Services;
