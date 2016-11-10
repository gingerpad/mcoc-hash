$(function() {

var champions = {
	champs: []
	, init: function() {
		var me = this;
		
		me.champs = [
			{name: "Rocket", hash: "#Offensive: Burst #Hero #Guardians of the Galaxy"},
			{name: "Electro", hash: "#Offensive: Burst #Villain #Sinister Six #Thunderbolts"},
			{name: "Daredevil (classic)", hash: "#Offensive: Raw #Hero #Defenders"},
			{name: "Drax", hash: "#Offensive: Damage over time #Hero #Guardians of the Galaxy"},
			{name: "Ronan", hash: "#Control: Counter #Hero #Villain #Kree"},
			{name: "Spider-Man (classic)", hash: "#Defensive: Utility #Hero #New Avengers #Civil War - Iron Man"},
			{name: "Vision (Age of Ultron)", hash: "#Control: Denial #Hero #Robot #Avengers #Civil War - Iron Man"},
			{name: "Black Bolt", hash: "#Offensive: Raw Damage #Hero #Illuminati #Inhuman"},
			{name: "Iron Fist", hash: "#Offensive: Burst #Hero #Defenders"},
			{name: "Wolverine", hash: "#Defensive: Utility #Hero #Metal #X-Men #New Avengers #X-Force"},
			{name: "Thor", hash: "#Offensive: Burst #Hero #Avengers #Chronos Corps"},
			{name: "Thor (Jane Foster)", hash: "#Offensive: Burst #Hero #New Avengers"},
			{name: "Yellowjacket", hash: "#Control: Denial #Villain #Metal #Villain of the Contest"},
			{name: "Joe Fixit", hash: "#Defensive: Utility #Villain #Villain of the Contest"},
			{name: "Cyclops (Blue Team)", hash: "#Offensive: Burst #Hero #X-Men"},
			{name: "Daredevil (Netflix)", hash: "#Offensive: Raw Damage #Hero #Defenders"},
			{name: "Deadpool (X-Force)", hash: "#Offensive: Damage Over Time #Mercenary #X-Force"},
			{name: "Elektra", hash: "#Offensive: Raw Damage #Mercenary #Defenders #Thunderbolts"},
			{name: "Magneto (Marvel Now)", hash: "#Offensive: Damage Over Time #Hero #X-Men"},
			{name: "Guillotine", hash: "#Control: Counter #Hero #Metal"},
			{name: "Agent Venom", hash: "#Offensive: Damage Over Time #Hero #Guardians of the Galaxy #Symbiote"},
			{name: "Hulkbuster", hash: "#Defensive: Tank #Hero #Metal #Avengers"},
			{name: "Iron Patriot", hash: "#Defensive: Guard #Hero #Metal #Sinister Six #Thunderbolts"},
			{name: "Spider-Gwen", hash: "#Defensive: Utility #Hero"},
			{name: "Spider-Man (Miles Morales)", hash: "#Control: Denial #Hero #New Avengers #Champions"},
			{name: "Magneto", hash: "#Offensive: Damage Over Time #Villain #Illuminati #X-Force"},
			{name: "Juggernaut", hash: "#Defensive: Tank #Vilain #Thunderbolts"},
			{name: "Venompool", hash: "#Control: Counter #Villain #Symbiote"},
			{name: "Star-Lord", hash: "#Offensive: Damage Over Time #Hero #Guardians of the Galaxy"},
			{name: "Punisher", hash: "#Offensive: Damage Over Time #Hero #Defenders"},
			{name: "Scarlet Witch", hash: "#Control: Denial #Hero #Avengers #Civil War - Cpt. America #A-Force"},
			{name: "Winter Soldier", hash: "#Offensive: Raw Damage #Mercenary #Metal #Civil War - Cpt. America"},
			{name: "Venom", hash: "#Defensive: Tank #Villain #Symbiote #Chronos Corps"},
		];

		me.DisplayData(me.champs);
		
		me.InitSearch();
	}
	
	, InitSearch: function() {
		var me = this;
		
		$('.search').keyup(function() {
			
			var criteria = $(this).val();
			
			if(criteria.length > 3) {
				me.RunSearch(criteria);
			} else {
				$('.champ').show().removeClass('name-show').removeClass('hash-show');
			}
		});
	}
	
	, RunSearch: function(q) {
		var me = this;
		
		$('.champ').hide().removeClass('name-show').removeClass('hash-show');
		
		$( '.champ[data-name*="' + q.toLowerCase() + '"]' ).addClass('name-show');
		$( '.champ[data-hash*="' + q.toLowerCase() + '"]' ).addClass('hash-show');
	}
	
	, DisplayData: function(data) {
		var me = this;
		
		var ch = data.sort(function(a,b) {
			return a.name - b.name;
		});
		
		for (var i = 0; i < data.length; i++) {
			var d = data[i];
			
			var container = $('<div class="champ" data-name="' + d.name.toLowerCase() + '" data-hash="' + d.hash.toLowerCase() + '"></div>');
			
			var name = '';
			var hash = '';

			name = $('<div class="name"><b>' + d.name + '</b></div>');
			hash = $('<div class="hash">' + d.hash + '</div>');
			
			container.append(name).append(hash);
		
			$('.champs').append(container);
		}
	}
}

champions.init();

});