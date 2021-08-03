import React from "react";
import Footer2 from "../../Components/Footer/Footer2";
import Navbar from "../../Components/Navbar/Navbar";
import Nav2 from "../../Components/Nav2/Nav2";
import "./TermsandCondition.css";

function TermsandCondition() {
  return (
    <>
      {localStorage.getItem("auth_id") !== null &&
      localStorage.getItem("auth_id") !== undefined &&
      localStorage.getItem("auth_id") !== "" ? (
        <Nav2 />
      ) : (
        <Navbar />
      )}
      <div className="container">
        <div className="row mt-5 mb-2">
          <h1
            className="col-md-12 font-weight-bold"
            style={{ color: "#865ddd" }}
          >
            Terms and Conditions
          </h1>
        </div>
        <p>
          The terms and conditions of this Policy govern your use of 'CV VLOGS',
          an online platform for both job seekers and employers for job
          searching and hiring, respectively (hereinafter referred to as the
          "Platform"). The terms of this Policy are applicable to all persons
          who use or access the Platform on behalf of a commercial enterprise,
          business concern, governmental organization and/or educational
          institution (the "Enterprise") or in an individual capacity, including
          authorized users representing the Enterprise, its employees, or other
          persons using or accessing the Platform (the "User(s)"). Furthermore,
          anyone agreeing to the terms of this Policy on behalf of an Enterprise
          represents and warrants that they have the authority to bind said
          Enterprise to the Policy and are therefore accepting the terms and
          condition hereunder on behalf of the Enterprise.
        </p>
        <p>
          CV Vlogs is never involved in any communication taking place between
          Users and resultantly bears no responsibility for any information
          provided on the Platform, including without limitation, the quality,
          safety and legality of the jobs/resumes posted, the reliability or
          accuracy of the job listings, and the ability of employers to offer
          job opportunities to candidates and/or the ability of candidates to
          fill job vacancies (the "User Content").
        </p>
        <p>
          CV Vlogs charges a fee to both the recruiter and the candidate. The
          fees charged to Candidates for progress tracking on job applied shall
          be paid monthly and automatically charged to the Candidate debit or
          credit card. Recruiters on the other hand are charged a one-time fee
          to shortlist, message and communicate with a candidate.
        </p>
        <p>
          Payment made by Recruiters are refundable only if the Candidate
          shortlisted by the Recruiter is unavailable. Recruiters are advised to
          contact us within 48 hours via support@Cvvlogs.comto claim refund.
        </p>
        <p>
          CV Vlogs makes no implied or express representations or warranties
          regarding the completeness, timeliness or accuracy of the User Content
          submitted on the Platform and shall not be held liable for any error
          results, whether directly or indirectly, from an individual’s reliance
          on information provided on the Platform by anyone other than CV Vlogs.
        </p>
        <p>
          CV Vlogs reserves the right, in its sole discretion, to remove User
          Content from the Platform; however, no obligation exists on CV Vlogs
          to definitively undertake any such action.
        </p>
        <p>
          CV Vlogs shall, in no manner or form, be responsible for the Platform
          services and/or User Content (1) meeting any party’s expectations or
          requirements’ (2) being secure or free from any errors, bugs, viruses
          and other harmful components’ and/or (3) functioning free of any and
          all interruption, theft or destruction. No claims shall be entertained
          by CV Vlogs with regards to:ٖ
        </p>
        <p>
          CV Vlogs maintains a strict harassment and identity theft policy in
          compliance with the standard regulations. Under no circumstance shall
          CV Vlogs be responsible for any form of harassment or identity theft
          that may occur as a result of you uploading your user content on the
          Platform.{" "}
        </p>
        <p>
          {" "}
          Usage of the Platform in combination with any third-party materials,
          applications, platforms or software.
        </p>
        <p>
          Liability, direct or otherwise, for any infrastructure related issues
          such as viruses, worms, operating system downtime, hardware/operating
          system (OS) errors/glitches, denial of service, delays, OS software
          lags and/or any other forces on the internet that may cause
          disruptions to the functionality, implementation, support or access to
          the Platform and as a result of which Users and/or third-parties are
          affected in any manner.
        </p>
        <p>
          CV Vlogs values and understand the confidentiality of your information
          and will not share your information to any other third-party except as
          a required by law. Users of the platform are also endured to avoid
          sharing their personal information to other users. In the event of a
          breach of this clause by the User, CV Vlogs shall not be liable for
          any damage or loss that will occur as a result of the breach of
          confidentiality.{" "}
        </p>
        <p>
          Candidates are also endured to refrain from mentioning their names
          during the video recording for privacy reasons.{" "}
        </p>
        <p>
          No liability shall be incurred by CV Vlogs for any loss, damage,
          delays or failures arising out of use of the Platform and attributable
          to acts beyond CV Vlogs control, including but not limited to acts of
          God, changes to laws, embargoes, wars, terrorist acts, acts or
          omissions of third-party’s, epidemics, explosions, socio-economic
          instability, natural calamities, power outages, weather conditions,
          acts of hackers, internet issues service providers, any outside forces
          that disrupt the functionality of the Platform and acts or omissions
          of the User or any third party.
        </p>
        <p>
          NEITHER CV VLOGS NOR ANY OTHER PARTY INVOLVED IN CREATING, PRODUCING
          OR DELIVERING THE PLATFORM CONTENT SHALL BE LIABLE FOR ANY INCIDENTAL,
          SPECIAL, EXEMPLARY OR CONSEQUENTIAL DAMAGES, INCLUDING BUT NOT LIMITED
          TO LOST PROFITS, LOSS OF OPPORTUNITY, LOSS OF DATA, GOODWILL, SERVICE
          INTERRUPTION, COMPUTER DAMAGE OR SYSTEM FAILURE OR THE COST OF
          SUBSTITUTE SERVICES ARISING OUT OF OR IN CONNECTION WITH THIS POLICY
          OR FROM THE USE OF OR INABILITY TO USE THE PLATFORM, SERVICES OR
          CONTENT, WHETHER SUCH DAMAGES ARE BASED ON WARRANTY, CONTRACT, TORT
          (INCLUDING NEGLIGENCE), PRODUCT LIABILITY, OR ANY OTHER LEGAL THEORY
          AND WHETHER OR NOT CV Vlogs HAS BEEN INFORMED OF THE POSSIBILITY OF
          SUCH DAMAGES.{" "}
        </p>
        <p>
          You agree to defend, indemnify and hold CV Vlogs, its affiliates, and
          its and their directors, officers, employees and agents harmless from
          any and all claims, liabilities, costs and expenses, including
          reasonable attorneys' fees, arising in any way from any content or
          other material you place on the Site, or your breach or violation of
          the law or of these Terms and Conditions. CV Vlogs reserves the right,
          at its own expense, to assume the exclusive defense and control of any
          matter otherwise subject to indemnification by you, and in such case,
          you agree to cooperate with CV Vlog’s defense of such claim.
        </p>
        <p>
          TO THE MAXIMUM EXTENT ALLOWED BY LAW, THE SITE, INCLUDING, WITHOUT
          LIMITATION, ALL SERVICES, PRODUCTS, CONTENT, FUNCTIONS AND MATERIALS
          CONTAINED OR AVAILABLE THEREON, IS PROVIDED "AS IS," "AS AVAILABLE",
          WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING,
          WITHOUT LIMITATION, ANY WARRANTY FOR INFORMATION, DATA, DATA
          PROCESSING SERVICES, UPTIME OR UNINTERRUPTED ACCESS, AVAILABILITY,
          ACCURACY, USEFULNESS, OR CONTENT OF INFORMATION, AND ANY WARRANTIES OF
          TITLE, NON-INFRINGEMENT, MERCHANTABILITY OR FITNESS FOR A PARTICULAR
          PURPOSE. WE HEREBY DISCLAIM ANY AND ALL SUCH WARRANTIES, EXPRESS AND
          IMPLIED. COMPANY ALSO ASSUMES NO RESPONSIBILITY, AND SHALL NOT BE
          LIABLE FOR, ANY DAMAGES TO, OR VIRUSES THAT MAY INFECT, YOUR COMPUTER
          EQUIPMENT OR OTHER PROPERTY ON ACCOUNT OF YOUR ACCESS TO OR USE OF THE
          SITE OR YOUR DOWNLOADING OF ANY MATERIALS FROM THE SITE. IF YOU ARE
          DISSATISFIED WITH THE SITE, YOUR SOLE REMEDY IS TO DISCONTINUE USING
          THE SITE. FURTHER, CV VLOGS DOES NOT WARRANT (A) THE ACCURACY,
          COMPLETENESS, CURRENCY, OR RELIABILITY OF ANY CONTENT, (B) THAT THE
          RESULTS OBTAINED FROM THE USE OF THE SITE OR THE SERVICES OR CONTENT
          WILL BE ACCURATE OR RELIABLE, OR (C) THAT THE QUALITY OF THE SITE OR
          THE SERVICES OR CONTENT WILL MEET YOUR EXPECTATIONS.
        </p>
        <p>
          In addition to any other method of termination or suspension provided
          for in these Terms and Conditions, CV Vlogs reserves the right to
          terminate, change, suspend or discontinue any aspect of the Site or
          the Site's services at any time. Further, you agree that CV Vlogs
          shall not be liable to you or any third-party for any termination or
          suspension of your access to the Site or any part thereof, removal of
          Content. Any such termination, suspension or cancellation shall not
          affect any right or relief to which CV Vlogs may be entitled at law or
          in equity. Upon any such termination, suspension or cancellation, you
          shall terminate all use of the Site, the Services and any Content and
          you will not be entitled to any refund of any fees or other charges,
          if any, paid in connection with such use.
        </p>
        <p>
          For further information or to contact us with questions, concerns, or
          comments, you may email us at the email in the footer of our website
          or visit our Contact Us page. Although we will, in most circumstances,
          be able to receive your email or other information provided through
          the Site, we do not guarantee that it will receive all such email or
          other information timely and accurately. We shall not be legally
          obligated to read, act on, or respond to any such email or other
          information.
        </p>
      </div>
      <Footer2 />
    </>
  );
}

export default TermsandCondition;
