<script lang="ts">
	const features = [
    {
        title: 'Comprehensive Health Profile',
        body: 'Easily store and update your vital health information, including blood type, allergies, and medications. Keep your details up-to-date for better medical care.',
        icon: 'fa-heartbeat'
    },
    {
        title: 'Medical Records at Your Fingertips',
        body: 'Effortlessly upload and organize your medical records, lab results, prescriptions, and more. Access your entire medical history whenever you need it.',
        icon: 'fa-file-medical'
    },
    {
        title: 'Secure Document Storage',
        body: 'Keep all your medical documents, X-rays, scans, and reports securely stored in our encrypted cloud storage. Your data\'s safety is our priority.',
        icon: 'fa-lock'
    },
    {
        title: 'Medication Tracking Made Simple',
        body: 'Never miss a dose again! Track your medications and receive timely reminders to ensure proper adherence to your treatment plans.',
        icon: 'fa-pills'
    },
    {
        title: 'Allergy Alerts for Safer Care',
        body: 'Our system alerts you and your healthcare provider about potential allergens in medications or treatments, ensuring your safety at all times.',
        icon: 'fa-exclamation-circle'
    },
    {
        title: 'Data Privacy Guaranteed',
        body: 'Rest easy knowing your medical information is fully protected. We employ state-of-the-art security measures to ensure your data remains confidential.',
        icon: 'fa-shield-alt'
    }
];
</script>

<div class="space-y-4 md:space-y-10">
	<!-- Info -->
	<div class="space-y-4 text-center">
		<h2 class="h2">And so much more...</h2>
		<p>There's too many amazing features to list, but here are a few of our favorites.</p>
	</div>
	<!-- Grid -->
	<div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
		<!-- Loop -->
		{#each features as feature}
			<!-- Card -->
			<div class="card variant-glass p-4 shadow-lg md:p-10 space-y-4 text-center">
				<span class="btn-icon btn-icon-xl variant-soft-primary">
					<i class="fa-solid {feature.icon}" />
				</span>
				<h3 class="h3">{feature.title}</h3>
				<p>{@html feature.body}</p>
			</div>
		{/each}
	</div>
</div>
