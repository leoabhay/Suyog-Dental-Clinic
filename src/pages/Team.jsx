import { team } from '../data/websiteData'
import TeamMember from '../components/TeamMember'
import SectionHeading from '../components/SectionHeading'

export default function Team() {
  return (
    <div className="pt-32">
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionHeading 
            title="Meet Our Team"
            subtitle="Our team consists of highly qualified dentists and clinical staff who are committed to providing you with the highest standard of dental care."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <TeamMember key={index} member={member} index={index} />
            ))}
          </div>

          {/* <div className="mt-24 p-12 md:p-20 bg-teal-50 rounded-[4rem] text-center max-w-5xl mx-auto border border-teal-100">
            <h3 className="text-3xl font-black text-gray-900 mb-6">Want to Join Our Team?</h3>
            <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
              We are always looking for passionate dental professionals who want to make a difference in Saptari's dental healthcare landscape.
            </p>
            <button className="bg-teal-700 text-white px-10 py-4 rounded-2xl font-black hover:bg-teal-800 transition-all shadow-xl shadow-teal-700/20 active:scale-95">
              View Openings
            </button>
          </div> */}
        </div>
      </section>
    </div>
  )
}
