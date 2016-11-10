$(function() {

var champions = {
	champs: []
	, init: function() {
		var me = this;
		
		me.champs = [
			{name: "Rocket", champClass: "Tech", hash: "#Offensive: Burst #Hero #Guardians of the Galaxy"},
			{name: "Electro", champClass: "Science", hash: "#Offensive: Burst #Villain #Sinister Six #Thunderbolts"},
			{name: "Daredevil (classic)", champClass: "Skill", hash: "#Offensive: Raw #Hero #Defenders"},
			{name: "Drax", champClass: "Cosmic", hash: "#Offensive: Damage over time #Hero #Guardians of the Galaxy"},
			{name: "Ronan", champClass: "Cosmic", hash: "#Control: Counter #Hero #Villain #Kree"},
			{name: "Spider-Man (classic)", champClass: "Science", hash: "#Defensive: Utility #Hero #New Avengers #Civil War - Iron Man"},
			{name: "Vision (Age of Ultron)", champClass: "Tech", hash: "#Control: Denial #Hero #Robot #Avengers #Civil War - Iron Man"},
			{name: "Black Bolt", champClass: "Cosmic", hash: "#Offensive: Raw Damage #Hero #Illuminati #Inhuman"},
			{name: "Iron Fist", champClass: "Mystic", hash: "#Offensive: Burst #Hero #Defenders"},
			{name: "Wolverine", champClass: "Mutant", hash: "#Defensive: Utility #Hero #Metal #X-Men #New Avengers #X-Force"},
			{name: "Thor", champClass: "Cosmic", hash: "#Offensive: Burst #Hero #Avengers #Chronos Corps"},
			{name: "Thor (Jane Foster)", champClass: "Mystic", hash: "#Offensive: Burst #Hero #New Avengers"},
			{name: "Yellowjacket", champClass: "Science", hash: "#Control: Denial #Villain #Metal #Villain of the Contest"},
			{name: "Joe Fixit", champClass: "Science", hash: "#Defensive: Utility #Villain #Villain of the Contest"},
			{name: "Cyclops (Blue Team)", champClass: "Mutant", hash: "#Offensive: Burst #Hero #X-Men"},
			{name: "Daredevil (Netflix)", champClass: "Skill", hash: "#Offensive: Raw Damage #Hero #Defenders"},
			{name: "Deadpool (X-Force)", champClass: "Mutant", hash: "#Offensive: Damage Over Time #Mercenary #X-Force"},
			{name: "Elektra", champClass: "Skill", hash: "#Offensive: Raw Damage #Mercenary #Defenders #Thunderbolts"},
			{name: "Magneto (Marvel Now)", champClass: "Mutant", hash: "#Offensive: Damage Over Time #Hero #X-Men"},
			{name: "Guillotine", champClass: "Mystic", hash: "#Control: Counter #Hero #Metal"},
			{name: "Agent Venom", champClass: "Skill", hash: "#Offensive: Damage Over Time #Hero #Guardians of the Galaxy #Symbiote"},
			{name: "Hulkbuster", champClass: "Tech", hash: "#Defensive: Tank #Hero #Metal #Avengers"},
			{name: "Iron Patriot", champClass: "Tech", hash: "#Defensive: Guard #Hero #Metal #Sinister Six #Thunderbolts"},
			{name: "Spider-Gwen", champClass: "Science", hash: "#Defensive: Utility #Hero"},
			{name: "Spider-Man (Miles Morales)", champClass: "Science", hash: "#Control: Denial #Hero #New Avengers #Champions"},
			{name: "Magneto", champClass: "Mutant", hash: "#Offensive: Damage Over Time #Villain #Illuminati #X-Force"},
			{name: "Juggernaut", champClass: "Mystic", hash: "#Defensive: Tank #Vilain #Thunderbolts"},
			{name: "Venompool", champClass: "Cosmic", hash: "#Control: Counter #Villain #Symbiote"},
			{name: "Star-Lord", champClass: "Tech", hash: "#Offensive: Damage Over Time #Hero #Guardians of the Galaxy"},
			{name: "Punisher", champClass: "Skill", hash: "#Offensive: Damage Over Time #Hero #Defenders"},
			{name: "Scarlet Witch", champClass: "Mystic", hash: "#Control: Denial #Hero #Avengers #Civil War - Cpt. America #A-Force"},
			{name: "Winter Soldier", champClass: "Skill", hash: "#Offensive: Raw Damage #Mercenary #Metal #Civil War - Cpt. America"},
			{name: "Venom", champClass: "Cosmic", hash: "#Defensive: Tank #Villain #Symbiote #Chronos Corps"},
			{name: "Rhino", champClass: "Science", hash: "#Defensive: Tank #Villain #Sinister Six"},
			{name: "Captain America", champClass: "Science", hash: "#Defensive: Guard #Hero #Avengers #S.H.I.E.L.D #Civil War - Cpt. America"},
			{name: "Ant-Man", champClass: "Science", hash: "#Defensive: Tank #Hero #Metal #Civil War - Cpt. America"},
			{name: "Colossus", champClass: "Mutant", hash: "#Defensive: Guard #Hero #X-Men #X-Force"},
			{name: "Hawkeye", champClass: "Skill", hash: "#Offensive: Damage Over Time 'Hero #Avengers #S.H.I.E.L.D #Civil War - Cpt. America"},
			{name: "Loki", champClass: "Mystic", hash: "#Control: Denial #Villain #Villain of the Contest"},
			{name: "Spider-Man (Symbiote)", champClass: "Science", hash: "#Defensive: Utility #Hero #Symbiote"},
			{name: "Red Hulk", champClass: "Science", hash: "#Offensive: Damage Over Time #Villain #Thunderbolts"},
			{name: "Phoenix", champClass: "Cosmic", hash: "#Offensive: Burst #Hero #X-Men"},
			{name: "Black Panther (Civil War)", champClass: "Skill", hash: "#Defensive: Guard #Hero #Civil War - Iron Man"},
			{name: "Old Man Logan", champClass: "Mutant", hash: "#Offensive: Burst #Hero #Metal #X-Men"},
			{name: "She-Hulk", champClass: "Science", hash: "#Offensive: Raw Damage #Hero #A-Force"},
			{name: "Beast", champClass: "Mutant", hash: "#Offensive: Raw Damage #Hero #X-Men #Illuminati"},
			{name: "Ms Marvel (Kamala Khan)", champClass: "Cosmic", hash: "#Offensive: Raw Damage #Hero #Inhuman #Champions #A-Force"},
			{name: "Ghost Rider", champClass: "Mystic", hash: "#Control: Counter #Hero #Defenders #Thunderbolts #Champions"},
			{name: "Wolverine (X-23)", champClass: "Mutant", hash: "#Offensive: Damage Over Time #Hero #Metal #Thunderbolts #X-Force"},
			{name: "Karnak", champClass: "Skill", hash: "#Offensive: Raw Damage #Mercenary #Inhuman"},
			{name: "Gamora", champClass: "Cosmic", hash: "#Offensive: Burst #Hero #Metal #Guardians of the Galaxy"},
			{name: "Black Widow", champClass: "Skill", hash: "#Offensive: Burst #Mercenary #S.H.I.E.L.D #Civil War - Iron Man #Champions"},
			{name: "Nightcrawler", champClass: "Mutant", hash: "#Defensive: Utility #Hero #X-Men"},
			{name: "Storm", champClass: "Mutant", hash: "#Offensive: Burst #Hero #X-Men #X-Force"},
			{name: "Unstoppable Colossus", champClass: "Mystic", hash: "#Defensive: Utility #Villain #Metal #X-Men"},
			{name: "Superior Iron Man", champClass: "Cosmic", hash: "#Defensive: Guard #Hero #Illuminati"},
			{name: "Ultron", champClass: "Tech", hash: "#Defensive: Utility #Villain #Metal #Robot #Villain of the Contest"},
			{name: "Crossbones", champClass: "Skill", hash: "#Offensive: Raw Damage #Villain #Metal"},
			{name: "Captain Marvel", champClass: "Cosmic", hash: "#Offensive: Raw Damage #Hero #Avengers #Kree #A-Force"},
			{name: "Magik", champClass: "Mystic", hash: "#Control: Denial #Hero #X-Men #S.H.I.E.L.D"},
			{name: "Abomination", champClass: "Science", hash: "#Defensive: Tank #Villain #Chronos Corps"},
			{name: "Civil Warrior", champClass: "Tech", hash: "#Defensive: Guard #Hero #Civil War - Iron Man #Civil War - Cpt. America"},
			{name: "Captain America (WWII)", champClass: "Science", hash: "#Defensive: Guard #Hero #S.H.I.E.L.D"},
			{name: "Ms. Marvel", champClass: "Cosmic", hash: "#Offensive: Raw Damage #Hero #Avengers #Kree #A-Force"},
			{name: "Gambit", champClass: "Mutant", hash: "#Offensive: Burst #Hero #X-Men"},
			{name: "Cyclops (New Xavier School)", champClass: "Mutant", hash: "#Offensive: Burst #Hero #X-Men"},
			{name: "Groot", champClass: "Cosmic", hash: "#Defensive: Tank #Hero #Guardians of the Galaxy"},
			{name: "War Machine", champClass: "Tech", hash: "#Offensive: Damage Over Time #Hero #Metal #Civial War - Iron Man"},
			{name: "Iron Man", champClass: "Tech", hash: "#Defensive: Guard #Hero #Metal #Avengers #Civil War - Iron Man"},
			{name: "Doctor Strange", champClass: "Mystic", hash: "#Control: Denial #Hero #illuminati"},
			{name: "Luke Cage", champClass: "Science", hash: "#Defensive: Guard #Mercenary #Defenders #Thunderbolts"},
			{name: "Moon Knight", champClass: "Skill", hash: "#Offensive: Raw Damage #Mercenary #Defenders"},
			{name: "Vision", champClass: "Tech", hash: "#Control: Denial #Hero #Robot #Avengers"},
			{name: "Quake", champClass: "Science", hash: "#Offensive: Raw Damage #Hero #Inhuman #S.H.I.E.L.D"},
			{name: "Hulk", champClass: "Science", hash: "#Defensive: Tank #Hero #Illuminati #Avengers"},
			{name: "Falcon", champClass: "Skill", hash: "#Control: Counter #Hero #Metal #Civil War - Cpt. America"},
			{name: "Rogue", champClass: "Mutant", hash: "#Control: Counter #Hero #X-Men #A-Force"}
		];

		me.DisplayData(me.champs);
		
		me.InitSearch();
	}
	
	, InitSearch: function() {
		var me = this;
		
		$('.search').keyup(function() {
			
			var criteria = $(this).val();
			
			if(criteria.length >= 3) {
				me.RunSearch(criteria);
			} else {
				$('.champ').show().removeClass('name-show').removeClass('hash-show').removeClass('class-show');
			}
		});
	}
	
	, RunSearch: function(q) {
		var me = this;
		
		$('.champ').hide().removeClass('name-show').removeClass('hash-show').removeClass('class-show');
		
		$( '.champ[data-name*="' + q.toLowerCase() + '"]' ).addClass('name-show');
		$( '.champ[data-hash*="' + q.toLowerCase() + '"]' ).addClass('hash-show');
		$( '.champ[data-class*="' + q.toLowerCase() + '"]' ).addClass('class-show');
	}
	
	, DisplayData: function(data) {
		var me = this;
		
		var ch = data.sort(function(a,b) {
			if ( a.name < b.name )
				return -1;
			if ( a.name > b.name )
				return 1;
			return 0;
		});
		
		for (var i = 0; i < ch.length; i++) {
			var d = ch[i];
			
			var container = $('<div class="champ" data-name="' + d.name.toLowerCase() + '" data-hash="' + d.hash.toLowerCase() + '" data-class="' + d.champClass.toLowerCase() + '"></div>');
			
			var left = $('<div class="left"></div>');
			var right = $('<div class="right"><img class="class-icon" src="images/icons/' + d.champClass.toLowerCase() + '.png"/></div>');
			
			var name = '';
			var hash = '';

			name = $('<div class="name"><b>' + d.name + '</b></div>');
			hash = $('<div class="hash">' + d.hash + '</div>');
			
			left.append(name).append(hash);

			
			container.append(left).append(right);
		
			$('.champs').append(container);
		}
	}
}

champions.init();

});